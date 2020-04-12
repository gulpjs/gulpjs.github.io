/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useCallback, useState} from 'react';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';

import SearchBar from '@theme/SearchBar';
import Toggle from '@theme/Toggle';
import useThemeContext from '@theme/hooks/useThemeContext';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLogo from '@theme/hooks/useLogo';

import styles from './styles.module.css';

function noop() {}

const useLinkLogo = (logo = {}) => {
  const {
    siteConfig: {baseUrl} = {},
  } = useDocusaurusContext();
  const {isDarkTheme} = useThemeContext();
  const logoLink = logo.href || baseUrl;
  let logoLinkProps = {};

  if (logo.target) {
    logoLinkProps = {target: logo.target};
  } else if (!isInternalUrl(logoLink)) {
    logoLinkProps = {
      rel: 'noopener noreferrer',
      target: '_blank',
    };
  }

  const logoSrc = logo.srcDark && isDarkTheme ? logo.srcDark : logo.src;
  const logoImageUrl = useBaseUrl(logoSrc);

  return {
    logoImageUrl,
    logoAlt: logo.alt,
  };
};

function NavLink({activeBasePath, to, href, logo, label, position, ...props}) {
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const {logoImageUrl, logoAlt} = useLinkLogo(logo);

  const content = logoImageUrl != null ? <img
    className={classnames(styles.navbarIcon)}
    src={logoImageUrl}
    alt={logoAlt} /> : label;

  return (
    <Link
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href,
          }
        : {
            activeClassName: 'navbar__link--active',
            to: toUrl,
            ...(activeBasePath
              ? {
                  isActive: (_match, location) =>
                    location.pathname.startsWith(activeBaseUrl),
                }
              : null),
          })}
      {...props}>
      {content}
    </Link>
  );
}

function NavItem({items, emphasis, position, ...props}) {
  if (!items) {
    return <NavLink className={classnames('navbar__item', 'navbar__link', {
      'navbar__link--icon': props.logo,
      [styles.emphasis]: emphasis,
      [styles.noWrap]: true,
    })} {...props} />;
  }

  return (
    <div
      className={classnames('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--left': position === 'left',
        'dropdown--right': position === 'right',
      })}>
      <NavLink className="navbar__item navbar__link" {...props}>
        {props.label}
      </NavLink>
      <ul className="dropdown__menu">
        {items.map((linkItemInner, i) => (
          <li key={i}>
            <NavLink className="navbar__item navbar__link" {...linkItemInner} />
          </li>
        ))}
      </ul>
    </div>
  );
}


function Navbar() {
  const {
    siteConfig: {
      themeConfig: {
        navbar: {title, links = [], hideOnScroll = false} = {},
        disableDarkMode = false,
      },
    },
    isClient,
  } = useDocusaurusContext();
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);
  const {logoLink, logoLinkProps, logoImageUrl, logoAlt} = useLogo();

  const onToggleChange = useCallback(
    e => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme],
  );

  return (
    <nav
      ref={navbarRef}
      className={classnames('navbar', 'navbar--light', 'navbar--fixed-top', {
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: !isNavbarVisible,
      })}>
      <div className="navbar__inner">
        <div className="navbar__items">
          <Link className="navbar__brand" to={logoLink} {...logoLinkProps}>
            {logoImageUrl != null && (
              <img
                key={isClient}
                className="navbar__logo"
                src={logoImageUrl}
                alt={logoAlt}
              />
            )}
          </Link>
          {links
            .filter(linkItem => linkItem.position === 'left')
            .map((linkItem, i) => (
              <NavItem {...linkItem} key={i} />
            ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {links
            .filter(linkItem => linkItem.position === 'right')
            .map((linkItem, i) => (
              <NavItem {...linkItem} key={i} />
            ))}
          {!disableDarkMode && (
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              aria-label="Dark mode toggle"
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
          <SearchBar
            handleSearchBarToggle={noop}
            isSearchBarExpanded={true}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
