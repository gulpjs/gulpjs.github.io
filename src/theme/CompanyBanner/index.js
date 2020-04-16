import React from 'react';
import shuffle from 'lodash.shuffle';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExternalLink from '@theme/ExternalLink';

import styles from './banner.module.scss';

function randomLogos(logos) {
  return shuffle(logos).slice(0, 4);
}

function CompanyLogo({ logo }) {
  return (
    <li className={styles.companyListItem} style={logo.style}>
      <ExternalLink className={styles.companyLink} href={logo.href} title={logo.title}>
        <img
          src={useBaseUrl(logo.src)}
          className={styles.companyLogo}
          alt={logo.alt} />
      </ExternalLink>
    </li>
  )
}

function CompaniesBanner() {
  const {
    siteConfig: {
      themeConfig: {
        companyLogos
      },
    },
  } = useDocusaurusContext();

  return (
    <div className={styles.banner}>
      <ul className={styles.companyLogos}>
        <BrowserOnly>
          {() => randomLogos(companyLogos).map((logo) => <CompanyLogo key={logo.href} logo={logo} />)}
        </BrowserOnly>
      </ul>
      <ExternalLink href="https://github.com/sponsors/gulpjs?tier_id=24682" className={styles.supportButton}>
        <span className={styles.supportTitle}>Organization Support</span>
        <span className={styles.supportDescription}>Provide gulp with ongoing support and we’ll let our users know!</span>
      </ExternalLink  >
    </div>
  )
}

export default CompaniesBanner;
