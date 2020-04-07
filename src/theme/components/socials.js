import React from 'react';
import styled from 'styled-components';

import useBaseUrl from '@docusaurus/useBaseUrl';

const SocialsContainer = styled.ul`
  display: none;

  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    > li {
      position: relative;
      margin: var(--tiny);
    }
    a {
      cursor: pointer;
    }
  }
`
const Socials = ({ props }) => {
  return (
    <SocialsContainer>
      <li><a href="https://twitter.com/gulpjs"><img src={(useBaseUrl('img/twitter.svg'))} alt="twitter" /></a></li>
      <li><a href="https://medium.com/gulpjs"><img src={(useBaseUrl('img/medium.svg'))} alt="medium" /></a></li>
    </SocialsContainer>
  )
}

export default Socials;