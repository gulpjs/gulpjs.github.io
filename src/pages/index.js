import React from 'react';

import { isMobile } from 'react-device-detect';

import globalStyles from '../theme/scss/global.module.scss';
import Logo from '@theme/components/logo';
import Nav from '@theme/components/nav';
import Socials from '@theme/components/socials';
import FooterNav from '@theme/components/footer-nav';
import Benefits from '@theme/sections/benefits';
import Plugins from '@theme/sections/plugins';
import Backers from '@theme/sections/backers';
import Hero from '@theme/sections/hero';
import Slider from '@theme/components/slider';

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
      <main>
        <Hero />
        <Slider />
        <Benefits />
        <div className={globalStyles.grey}>
          <Plugins />
        </div>
        <Backers />
        <Slider themed/>
      </main>

      <footer>
        <FooterNav />
        <Logo />
      </footer>
    </div>
  );
}

export default Index;
