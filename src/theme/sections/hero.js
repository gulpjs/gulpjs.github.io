import React from 'react';
import { isMobile } from 'react-device-detect';
import heroStyles from '../scss/hero.module.scss';

import HeroAnimation from '../components/hero-animation';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Hero = (props) => {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.hero__text}>
        {isMobile &&
          <div>
            <img src={useBaseUrl('img/gulp-2x.png')} alt="logo cup" />
            <h1>Automate and enhance your workflow</h1>
          </div>
        } {!isMobile &&
          <h1>Automate and enhance your workflow</h1>
        }
        <p>Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.</p>
      </div>
      {!isMobile &&
        <HeroAnimation />
      }
    </div>
  )
}

export default Hero;