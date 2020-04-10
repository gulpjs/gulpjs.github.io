import React from 'react';

import globalStyles from '../scss/global.module.scss';

const FooterNav = ({ props }) => {
  return (
    <ul className={globalStyles.footer__nav}>
      <li>
        <a href="https://github.com/gulpjs/gulp">Github</a>
      </li>
      <li>
        <a href="https://twitter.com/gulpjs">twitter</a>
      </li>
      <li>
        <a href="https://medium.com/gulpjs">blog</a>
      </li>
      <li>hello@gulpjs.com</li>
    </ul>
  )
}

export default FooterNav;