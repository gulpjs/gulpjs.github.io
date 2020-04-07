import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const DonateContainerMobile = styled.div`
  display: grid;
  grid-template-columns: 35% 60%;
  grid-column-gap: var(--medium);
  align-items: center;
  grid-area: footer;

  a {
    background: var(--red);
    padding: var(--tiny) 0;
    text-align: center;
    color: white;
  }

  p {
    color: var(--black);
  }
`
const DonateContainer = styled.div`  
  .donate-big {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 37% 37%;
    background: var(--red);
    min-height: 18vh;
    padding: 0 var(--medium);
    align-content: center;
    cursor: pointer;
    transition: box-shadow .1s ease-in, transform .1s ease-in;

    &:hover {
      transform: translate(5px, -5%);
      box-shadow: -7px 7px 0 3px var(--black);
      transition: box-shadow .1s ease-in, transform .1s ease-in;
    }

    h2 {
      margin: 0;
      align-self: center;
      color: white;
    }

    p {
      color: white;
      margin: 0;
      align-self: flex-start;
      font-family: var(--body-text);
    }
  }
`

const Donate = (props) => {
  if(isMobile) {
    return (
      <DonateContainerMobile>
        <a href="/"><h2>Donate</h2></a>
        <p>For companies wanting to support open source</p>
      </DonateContainerMobile>
    )
    } return (
      <DonateContainer>
        <a href="/" className="donate-big">
          <h2>Donate</h2>
          <p>For companies wanting to support open source</p>
        </a>
      </DonateContainer>
    )
}

export default Donate;