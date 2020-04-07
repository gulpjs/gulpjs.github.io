import React from 'react';
import styled from 'styled-components';

const FooterNavContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-column-gap: var(--big);

  @media(min-width: 768px) {
    grid-column-gap: var(--xxl);
  } 
`
const FooterNav = ({ props }) => {
  return (
    <FooterNavContainer>
      <ul>
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
    </FooterNavContainer>
  )
}

export default FooterNav;