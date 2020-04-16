import React from 'react';

import navStyles from '../scss/navigation.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Socials = ({ props }) => {
  return (
    <ul className={navStyles.socials}>
      <li><a href="https://twitter.com/gulpjs"><img src={(useBaseUrl('img/twitter.svg'))} alt="twitter" /></a></li>
      <li><a href="https://medium.com/gulpjs"><img src={(useBaseUrl('img/medium.svg'))} alt="medium" /></a></li>
    </ul>
  )
}

export default Socials;