import React from 'react';
import ExternalLink from '@theme/ExternalLink';

import styles from './backers.module.scss';

function BackerSection() {
  return (
    <div className={styles.backers}>
      <div className={styles.backersText}>
        <h2>Individual backers</h2>
        <p>
          Since 2013, gulp has been the toolkit of choice for developers and designers alike. Not only do we have communities who’ve relied on us since the beginning, but there’s also a constant flow of new users who find out how great their workflow can be with gulp.
        </p>
        <p>
          Gulp needs your help! We want to continue expanding our team and find even more contributors from every discipline to maintain and improve the project you love!
        </p>
      </div>
      <div className={styles.tier}>
        <h3 className={styles.tierTitle}>$2 each month</h3>
        <p>Thanks for supporting us. Every contribution helps us maintain and improve gulp!</p>
        <ExternalLink href="https://github.com/sponsors/gulpjs?tier_id=24679" className={styles.tierButton}>Donate $2</ExternalLink>
      </div>
      <div className={styles.tier}>
        <h3 className={styles.tierTitle}>$5 each month</h3>
        <p>We'll rotate your avatar through the individual contributors banner below.</p>
        <ExternalLink href="https://github.com/sponsors/gulpjs?tier_id=24680" className={styles.tierButton}>Donate $5</ExternalLink>
      </div>
      <div className={styles.tier}>
        <h3 className={styles.tierTitle}>$10 each month</h3>
        <p>We'll thank you on Twitter and rotate your avatar through the individual contributors banner below.</p>
        <ExternalLink href="https://github.com/sponsors/gulpjs?tier_id=24681" className={styles.tierButton}>Donate $10</ExternalLink>
      </div>
    </div>
  )
}

export default BackerSection;
