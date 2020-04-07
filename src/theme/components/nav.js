import React from 'react';
import styled from 'styled-components';

import { isMobile } from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu';

import useBaseUrl from '@docusaurus/useBaseUrl';

const links = [
  {
    title: 'get started',
    link: 'https://gulpjs.com/docs/en/getting-started/quick-start',
    class: 'uppercase'
  },
  {
    title: 'plugins',
    link: 'https://gulpjs.com/plugins/',
    class: 'uppercase'
  },
  {
    title: 'api',
    link: 'https://gulpjs.com/docs/en/api/concepts',
    class: 'uppercase'
  },
  {
    title: 'donate',
    link: 'https://opencollective.com/gulpjs',
    class: 'uppercase'
  },
  {
    title: 'enterprise',
    link: 'https://opencollective.com/gulpjs/contribute/company-1033/checkout',
    class: 'uppercase button-like'
  }
];

const NavigationContainer = styled.ul`
  font-family: var(--body-text);
  color: white;
  display: none;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: var(--hugest) var(--xxl) var(--large) var(--xxl) var(--hugest);
    grid-column-gap: var(--small);
    align-items: center;
  }

  li {
    text-align: center;
  }

  a {
    color: white;
    cursor: pointer;

    &.button-like {
      padding: var(--tiny);
      border: 2px solid white;
    }
  }
`
const Nav = (props) => {
  if(isMobile) {
    return (
      <Menu right noOverlay width="100%" 
      customBurgerIcon={ <img src={useBaseUrl('img/burger.svg')} alt="burger" /> }
      customCrossIcon={ <img src={useBaseUrl('img/close.svg')} alt="close"/> }>
      {links.map((link, index) => 
      <li key={index}>
        <a href={link.link} className={link.class}>{link.title}</a>
      </li>)}
      </Menu>
    )
  } return (
    <NavigationContainer>
      {links.map((link, index) => 
      <li key={index}>
        <a href={link.link} className={link.class}>{link.title}</a>
      </li>)}
    </NavigationContainer>
  )
}

export default Nav;