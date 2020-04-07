import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import { isMobile } from 'react-device-detect';

import Logo from '@theme/components/logo';
import Nav from '@theme/components/nav';
import Socials from '@theme/components/socials';
import Slider from '@theme/components/slider';
import FooterNav from '@theme/components/footer-nav';
import Hero from '@theme/sections/hero';
import Benefits from '@theme/sections/benefits';
import Plugins from '@theme/sections/plugins';
import Backers from '@theme/sections/backers';

const GlobalStyle = createGlobalStyle`
  :root {
    --tiny: .5rem;
    --small: 1rem;
    --medium: 1.5rem;
    --big: 2rem;
    --large: 2.5rem;
    --huge: 4.5rem;
    --xxl: 5rem;
    --hugest: 8rem;
    --max: 10rem;

    --max-width-large: 73rem;
    --max-width-big: 61.50rem;
    --max-width-mid: 50rem;
    --max-width-small: 15rem;
    --max-width-tiny: 12rem;

    --red: #CF4647;
    --light-gray: #F6F8FA;
    --purple: #393E64;
    --black: #0A0908;

    --heading-text: 'Work Sans', sans-serif;
    --body-text: 'Poppins', sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    line-height: calc(1.1rem + .5vw);
    font-weight: 400;
    scroll-behavior: smooth;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: var(--body-text);
    color: var(--black);
    margin: 0;
    padding: 0;
    background: #fff;
    overflow-x: hidden;
  }

  ul, ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    all: initial;
  }

  h1, h2, h3, h4, .uppercase {
    font-family: var(--heading-text);
    font-weight: 900;
  }

  h1 {
    font-size: calc(2.2rem + .1vw);
    line-height: calc(3rem + .2vw);
  }

  h2, h4, .uppercase {
    text-transform: uppercase;
  }

  h3 {
    font-size: calc(1.4rem + .1vw);
    line-height: calc(1.5rem + .2vw);
    color: var(--purple);
  }

  h4, .uppercase {
    font-size: calc(.9rem + .1vw);
  }
`;

const Header = styled.header`
  background: var(--red);
  position: relative;
  padding: var(--tiny) var(--big);
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-areas: "logo . burger";
  align-items: center;

  @media(min-width: 768px) {
    grid-template-areas: "logo nav burger";
  }

  .bm-item-list {
    background: white;
    padding: var(--small);
    grid-area: nav;

    > li {
      outline: none;
      padding: var(--tiny) 0;
    }
  }

  > div {
    grid-area: burger;
  }
  
  .bm-menu-wrap {
    width: 100%;
    top: 0;
    color: var(--purple);
  }

  .bm-cross-button {
    margin: var(--tiny);
  }
`

const Main = styled.main`
 
`

const Footer = styled.footer`
  background: var(--purple);
  position: relative;
  padding: var(--big);
  display: grid;
  grid-template-areas: "first last";
  grid-template-columns: 50% 50%;

  a, li {
    color: white;
    font-family: var(--body-text);
  }

  a {
    cursor: pointer;
  }

  @media(min-width: 768px) {
    grid-template-columns: 56% 30% 10%;
    grid-template-areas: ". first last";
    grid-column-gap: var(--big);
  }

  > ul {
    grid-area: first;
  }

  > a {
    grid-area: last;
    text-align: end;
    align-self: end;
    margin: var(--small);
  }
`

const GreyContainer = styled.div`
  display: block;

  @media(min-width: 768px) {
    background: var(--light-gray);
  }
`

function Index() {
  return (
    <div className="App">
      <GlobalStyle /> 
      <Header>
        <Logo />
        <Nav />
        {!isMobile &&
          <Socials />
        }
      </Header>
      <Main>
        <Hero />
        <Slider />
        <Benefits />
        <GreyContainer>
          <Plugins />
        </GreyContainer>
        <Backers />
        <Slider themed/>
      </Main>

      <Footer>
        <FooterNav />
        <Logo />
      </Footer>
    </div>
  );
}

export default Index;
