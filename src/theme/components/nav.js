import React from 'react';

import { isMobile } from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu';
import navStyles from '../scss/navigation.module.scss';
import globalStyles from '../scss/global.module.scss';

import useBaseUrl from '@docusaurus/useBaseUrl';

const links = [
  {
    title: 'get started',
    link: 'https://gulpjs.com/docs/en/getting-started/quick-start'
  },
  {
    title: 'plugins',
    link: 'https://gulpjs.com/plugins/'
  },
  {
    title: 'api',
    link: 'https://gulpjs.com/docs/en/api/concepts'
  },
  {
    title: 'donate',
    link: 'https://opencollective.com/gulpjs'
  },
  {
    title: 'enterprise',
    link: 'https://opencollective.com/gulpjs/contribute/company-1033/checkout'
  }
];


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
    <ul className={navStyles.nav}>
      {links.map((link, index) => 
      <li key={index}>
        <a href={link.link} className={globalStyles.uppercase}>{link.title}</a>
      </li>)}
    </ul>
  )
}

export default Nav;