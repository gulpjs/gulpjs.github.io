import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import { isMobile } from 'react-device-detect';

import globalStyles from './global.module.scss';
import Logo from '@theme/components/logo';
import Nav from '@theme/components/nav';
import Socials from '@theme/components/socials';
import Slider from '@theme/components/slider';
import FooterNav from '@theme/components/footer-nav';
import Hero from '@theme/sections/hero';
import Benefits from '@theme/sections/benefits';
import Plugins from '@theme/sections/plugins';
import Backers from '@theme/sections/backers';

const Main = styled.main`
 
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
      <header>
        <Logo />
        <Nav />
        {!isMobile &&
          <Socials />
        }
      </header>
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

      <footer>
        <FooterNav />
        <Logo />
      </footer>
    </div>
  );
}

export default Index;
