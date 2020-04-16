import React from 'react';
import sliderStyles from '../scss/slider.module.scss';
import { isMobile } from 'react-device-detect';

const Donate = (props) => {
  if(isMobile) {
    return (
      <div className={sliderStyles.donate__mobile}>
        <a href="/"><h2>Donate</h2></a>
        <p>For companies wanting to support open source</p>
      </div>
    )
    } return (
      <div className={sliderStyles.donate}>
        <a href="/" className="donate-big">
          <h2>Donate</h2>
          <p>For companies wanting to support open source</p>
        </a>
      </div>
    )
}

export default Donate;