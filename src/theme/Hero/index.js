import React from 'react';

import styles from './hero.module.scss';

import Svg from './svg';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTagline}>A toolkit to automate &amp; enhance your workflow</h1>
        <p className={styles.heroDescription}>
          Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines.
        </p>
      </div>
      <div className={styles.heroVisual}>
        <ul className={styles.techList}>
          <li className={styles.techItem}>
            <span className={styles.techName}>TypeScript</span>
            <span>Develop in any language</span>
          </li>
          <li className={styles.techItem}>
            <span className={styles.techName}>PNG</span>
            <span>Create assets with any tool</span>
          </li>
          <li className={styles.techItem}>
            <span className={styles.techName}>Markdown</span>
            <span>Write using any format</span>
          </li>
        </ul>
        <Svg />
        <ul className={styles.techList}>
          <li className={styles.techItem}>
            <span className={styles.techName}>JavaScript</span>
            <span>Get compiled code</span>
          </li>
          <li className={styles.techItem}>
            <span className={styles.techName}>WebP</span>
            <span>Get optimized images</span>
          </li>
          <li className={styles.techItem}>
            <span className={styles.techName}>HTML</span>
            <span>Get rendered content</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero;
