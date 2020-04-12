import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ExternalLink from '@theme/ExternalLink';

import styles from './plugins.module.scss';

function PluginSection() {
  return (
    <div className={styles.plugins}>
      <div className={styles.pluginsText}>
        <h2>Connecting plugins</h2>
        <p>
          Using community-built plugins is a quick way to get started with gulp. Each plugin does a small amount of work, so you can connect them like building blocks. Chain together plugins from a variety of technologies to reach your desired result.
        </p>
        <p className={styles.pluginsCTA}>
          {/* TODO: convert this to Link when plugins is done */}
          Browse the <ExternalLink href="https://gulpjs.com/plugins">community plugins</ExternalLink> to see what’s available!
        </p>
      </div>
      <div className={styles.pluginsGrid}>
        <ExternalLink href="https://www.npmjs.com/package/gulp-babel" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/babel.svg')} alt="Babel logo" />
          <span className={styles.pluginName}>Babel</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-sass" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/sass.png')} alt="SASS logo" />
          <span className={styles.pluginName}>SASS</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-typescript" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/typescript.png')} alt="TypeScript logo" />
          <span className={styles.pluginName}>TypeScript</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-autoprefixer" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/autoprefixer.png')} alt="Autoprefixer logo" />
          <span className={styles.pluginName}>Autoprefixer</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-imagemin" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/imagemin.png')} alt="Imagemin logo" />
          <span className={styles.pluginName}>Imagemin</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-pug" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/pug.svg')} alt="Pug logo" />
          <span className={styles.pluginName}>Pug</span>
        </ExternalLink>
      </div>
    </div>
  )
}

export default PluginSection;
