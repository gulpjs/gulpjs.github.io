import React from 'react';
import styled from 'styled-components';

import useBaseUrl from '@docusaurus/useBaseUrl';

const LinkLogo = styled.a`
  img {
    max-width: var(--xxl);
  }
`

const Logo = ({ props }) => {
  return (
    <LinkLogo href="#">
      <img src={useBaseUrl('img/gulp-new.svg')} alt='gulp' />
    </LinkLogo>
  )
}

export default Logo;