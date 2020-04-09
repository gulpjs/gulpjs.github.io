import React, {useEffect, useState} from 'react';
import classnames from 'classnames';

import Layout from '@theme/Layout';

import styles from './plugins.module.scss';

const initialUrl = `https://registry.npmjs.com/-/v1/search?text=keywords:gulpplugin`;

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
    <div className="row padding-vert--sm">
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

async function fetchInitialPackages() {
  try {
    const response = await fetch(initialUrl);
    const { total, objects } = await response.json();
    return { total, plugins: objects.map(toPlugin) };
  } catch(err) {
    console.log(err);
    return { total: 0, plugins: [] };
  }
}


function PluginsPage() {
  const [title, setTitle] = useState('Popular plugins');
  const [totalPluginCount, setTotalPluginCount] = useState(0);
  // const [searchPluginCount, setPluginCount] = useState(0);
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    fetchInitialPackages()
      .then(({ total, plugins }) => {
        setTotalPluginCount(total);
        setPlugins(plugins);
      });
  }, []);

  const placeholder = totalPluginCount ? `Search ${totalPluginCount} plugins` : `Search`;

  return (
    <Layout title="Plugins">
      <main className="container padding-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <input
              type="search"
              className={styles.searchInput}
              placeholder={placeholder} />
          </div>
        </div>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h1 className="margin-vert--md">{title}</h1>
          </div>
        </div>
        {plugins.map((plugin) => (
          <PluginComponent plugin={plugin} />
        ))}
      </main>
    </Layout>
  );
}

export default PluginsPage;
