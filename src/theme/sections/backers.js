import React from 'react';
import styled from 'styled-components';
import BackersGrid from './backers-grid';

const BackersContainer = styled.div`
  margin: 0 auto;
  padding: var(--big);
  
  @media(min-width: 768px) {
    max-width: var(--max-width-mid);
    display: grid;
    align-items: center;
  }

  @media(min-width: 1200px) {
    padding: var(--huge) var(--big);
    max-width: var(--max-width-large);
    grid-template-columns: 31% 62%;
    grid-column-gap: var(--huge);
  }

  h3 {
    margin-top: 0;
  }
`

const BackersText = styled.div`
  p {
    margin-bottom: 0;
  }
`

const Backers = ({ props }) => {
  return (
    <BackersContainer>
      <BackersText>
      <h3>Individual backers</h3>
      <p>Our mission statement. node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before.</p>
      </BackersText>
      <BackersGrid />
    </BackersContainer>
  )
}

export default Backers;