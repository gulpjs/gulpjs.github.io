import React from 'react';

import navStyles from '../scss/navigation.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Logo = ({ props }) => {
  return (
    <a className={navStyles.logo} href="#">
      <img src={useBaseUrl('img/gulp-new.svg')} alt='gulp' />
    </a>
  )
}

export default Logo;