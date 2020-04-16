import React from 'react';

import heroStyles from '../scss/hero.module.scss';
import Svg from './svg';

const Graph = (props) => {
  return (
    <div>
      <ul className={heroStyles.tech}>
        <li>
          <p className={heroStyles.uppercase}>pug</p>
          <p>or any otehr templating language</p>
        </li>
        <li>
          <p className={heroStyles.uppercase}>sass</p>
          <p>or any otehr templating language</p>
        </li>
        <li>
          <p className={heroStyles.uppercase}>js</p>
          <p>or any otehr templating language</p>
        </li>
      </ul>
      <div className={heroStyles.visual}>
        <Svg />
      </div>
      <ul className={heroStyles.tech}>
        <li>
          <p className={heroStyles.uppercase}>html</p>
          <p>or any otehr templating language</p>
        </li>
        <li>
          <p className={heroStyles.uppercase}>css</p>
          <p>or any otehr templating language</p>
        </li>
        <li>
          <p className={heroStyles.uppercase}>js</p>
          <p>or any otehr templating language</p>
        </li>
      </ul>
    </div>
  )
}

export default Graph;