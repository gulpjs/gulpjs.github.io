import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import Layout from '@theme/Layout';

import styles from './plugins.module.scss';

const baseUrl = `https://registry.npmjs.com/-/v1/search`;

const internalKeywords = ['gulp', 'gulpplugin'];

function isInternalKeyword(keyword) {
  return !internalKeywords.includes(keyword);
}

class Plugin {
  constructor(object) {
    this._package = object.package;
  }

  get key() {
    return this._package.name;
  }

  get name() {
    return this._package.name;
  }

  get description() {
    return this._package.description;
  }

  get version() {
    return `v${this._package.version}`;
  }

  get keywords() {
    // Unique Keywords
    const keywords = new Set(this._package.keywords);
    return Array.from(keywords).filter(isInternalKeyword);
  }

  get primaryUrl() {
    const { npm, homepage, repository } = this._package.links;

    if (npm) {
      return npm;
    }

    if (homepage) {
      return homepage;
    }

    return repository;
  }

  get links() {
    const { npm, homepage, repository } = this._package.links;
    const links = [];
    if (npm) {
      links.push({ text: 'npm', href: npm });
    }

    if (homepage &&
      homepage !== npm &&
      homepage !== repository &&
      homepage !== `${repository}#readme`) {
      links.push({ text: 'homepage', href: homepage });
    }

    if (repository) {
      links.push({ text: 'repository', href: repository });
    }

    return links;
  }
}

function toPlugin(object) {
  return new Plugin(object);
}

function PluginFooter({ keywords = [] }) {
  if (keywords.length === 0) {
    return null;
  } else {
    return (
      <div className="card__footer">
        <ul className={classnames('pills padding-top--sm text--normal text--right', styles.pluginCardKeywords)}>
          {keywords.map((keyword) => <li key={keyword} className="pill-item">{keyword}</li>)}
        </ul>
      </div>
    );
  }
}

function PluginComponent({ plugin }) {
  return (
    <div className="row padding-vert--md">
      <div className="col col--10 col--offset-1">
        <div key={plugin.key} className="card">
          <div className={classnames('card__header', styles.pluginCardHeader)}>
            <h2><a className={styles.primaryUrl} href={plugin.primaryUrl}>{plugin.name}</a></h2>
            <span className="badge badge--primary">{plugin.version}</span>
          </div>
          <div className="card__body">
            {plugin.description}
            <div className="padding-top--sm">
              {plugin.links.map((link) => <a key={link.text} className="padding-right--sm" href={link.href}>{link.text}</a>)}
            </div>
          </div>
          <PluginFooter keywords={plugin.keywords} />
        </div>
      </div>
    </div>
  )
}

function noop(evt) {
  evt && evt.preventDefault();
}

function Paginate({ onPage = noop }) {
  return (
    <div className="row padding-vert--md">
      <div className="col col--4 col--offset-4">
        <button className="button button--block button--primary" onClick={onPage}>
          Load more
        </button>
      </div>
    </div>
  );
}

function keywordsToQuerystring(keywords) {
  let keywordsStr = `keywords:`;

  if (keywords.size) {
    keywordsStr += [...keywords].join(',');
    keywordsStr += `+gulpplugin`;
  } else {
    keywordsStr += `gulpplugin`;
  }

  return keywordsStr;
}

async function fetchPackages(keywords, searchText = '', pageNumber = 0) {
  const pageSize = 20;

  let search = [
    keywordsToQuerystring(keywords),
  ];
  if (searchText) {
    search.push(encodeURIComponent(searchText));
  }

  const from = `${pageNumber * pageSize}`;
  const text = search.join(' ');

  try {
    const initialUrl = `${baseUrl}?from=${from}&text=${text}&quality=0.5&popularity=1.0&maintenance=0.1`;
    const response = await fetch(initialUrl);
    const { total, objects } = await response.json();
    return { total, plugins: objects.map(toPlugin) };
  } catch (err) {
    console.log(err);
    return { total: 0, plugins: [] };
  }
}

function keywordsRegExp() {
  return /keywords:([\S]*)\s*/g;
}

function extractKeywords(text) {
  // This is really messy, should probably test it
  let newKeywords = new Set();
  for (const match of text.matchAll(keywordsRegExp())) {
    const kw = match[1].split(`,`);
    newKeywords = new Set([...newKeywords, ...kw]);
  }

  let newText = text.replace(keywordsRegExp(), ``).trim();

  return [newKeywords, newText];
}

function formatSearch(keywords = (new Set()), searchText = '') {
  let searchQuery = [];
  if (keywords.size) {
    searchQuery.push(`keywords:${[...keywords].join(',')}`);
  }
  if (searchText) {
    searchQuery.push(searchText);
  }

  return searchQuery.join(' ');
}

function useSearch() {
  const [isPopular, setIsPopular] = useState(true);
  const [title, setTitle] = useState(``);
  const [plugins, setPlugins] = useState([]);
  const [placeholder, setPlaceholder] = useState(`Search`);
  const [keywords, setKeywords] = useState(new Set());
  const [searchText, setSearchText] = useState(``);
  // Pagination stuff
  const [isPaging, setIsPaging] = useState(false);
  const [pageNumber, setPageNumer] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    fetchPackages(keywords, searchText, pageNumber)
      .then((results) => {
        if (isPopular) {
          setTitle(`Popular plugins`);
          setPlaceholder(`Search ${results.total} plugins`);
        } else {
          const searchQuery = formatSearch(keywords, searchText);
          setTitle(`Found ${results.total} searching for \`${searchQuery}\``);
        }

        let loadedPlugins;
        if (isPaging) {
          loadedPlugins = plugins.concat(results.plugins);
        } else {
          loadedPlugins = results.plugins;
        }

        if (loadedPlugins.length === results.total) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }

        setPlugins(loadedPlugins);
      });
  }, [searchText, keywords, pageNumber]);

  function search(text) {
    // Undo paging upon search
    setIsPaging(false);
    setPageNumer(0);

    // Empty search reverts to popular
    if (text === ``) {
      setIsPopular(true);
    } else {
      setIsPopular(false);
    }

    const [newKeywords, newText] = extractKeywords(text);
    setKeywords(newKeywords);
    setSearchText(newText);
  }

  function paginate() {
    setIsPaging(true);
    setPageNumer(pageNumber + 1);
  }

  const state = {
    title,
    plugins,
    placeholder,
    hasMore,
  };

  const handlers = {
    search,
    paginate,
  };

  return [state, handlers];
}


function PluginsPage() {
  const [{ title, plugins, placeholder, hasMore }, { search, paginate }] = useSearch();
  const [searchInput, setSearchInput] = useState(``);

  let onSubmit = (evt) => {
    evt.preventDefault();
    search(searchInput);
  };

  let onChange = (evt) => {
    evt.preventDefault();
    setSearchInput(evt.target.value);
  };

  return (
    <Layout title="Plugins">
      <main className="container padding-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <form className={styles.searchContainer} onSubmit={onSubmit}>
              <input
                type="search"
                className={styles.searchInput}
                placeholder={placeholder}
                value={searchInput}
                onChange={onChange} />
              <button className={classnames("button button--primary", styles.searchButton)}>
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h1 className="margin-vert--md">{title}</h1>
          </div>
        </div>
        {plugins.map((plugin) => (
          <PluginComponent key={plugin.name} plugin={plugin} />
        ))}
        {hasMore ? <Paginate onPage={paginate} /> : null}
      </main>
    </Layout>
  );
}

export default PluginsPage;
