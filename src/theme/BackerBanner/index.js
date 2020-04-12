// TODO: This file needs a massive rewrite for GitHub Sponsors
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import shuffle from 'lodash.shuffle';
import ExternalLink from '@theme/ExternalLink';

import styles from './banner.module.scss';

const collectiveURL ='https://rest.opencollective.com/v2/gulpjs/orders/incoming?status=active,paid&limit=1000';

function uniqueBySlug(array) {
  const predicate = function (o) {
    return o.fromAccount.slug;
  }
  return array.reduce(function(acc, curr) {
    return acc.filter(function (a) {
      return predicate(a) === predicate(curr);
    }).length ? acc : acc.push(curr) && acc
  }, []);
}

const specialFilter = [
  'addyosmani',
];

const thirtyTwoDaysAgo = Date.now() - 2.765e+9;

function withinMonth(createdAt) {
  const datePaid = new Date(createdAt);
  return datePaid >= thirtyTwoDaysAgo;
}

function recentNonCompanies(backer) {
  if (backer.fromAccount && specialFilter.includes(backer.fromAccount.slug)) {
    return false;
  }

  if (backer.fromAccount && backer.fromAccount.type === 'ORGANIZATION') {
    return false;
  }

  if (backer.tier && backer.tier.slug === 'company') {
    return false;
  }

  if (backer.frequency === 'MONTHLY' && backer.status === 'ACTIVE') {
    return true;
  }

  if (backer.frequency === 'ONETIME' && backer.status === 'PAID' && withinMonth(backer.createdAt)) {
    return true;
  }

  return false;
}

function selectRandom(backers) {
  return shuffle(backers).slice(0, 12);
}

async function getBackers() {
  const response = await fetch(collectiveURL);
  const orders = await response.json();

  const allBackers = orders.nodes.filter(recentNonCompanies);

  const uniqueBackers = uniqueBySlug(allBackers);
  const backersToDisplay = selectRandom(uniqueBackers)

  return backersToDisplay.map(function(backer) {
    const fromAccount = backer.fromAccount;
    const totalDonations = backer.totalDonations;

    const name = fromAccount.name;
    const slug = fromAccount.slug;
    const website = fromAccount.website;
    const twitterHandle = fromAccount.twitterHandle;
    const imageUrl = fromAccount.imageUrl;

    let href;
    if (website) {
      href = website;
    } else if (twitterHandle) {
      href = 'https://twitter.com/' + twitterHandle
    } else {
      href = 'https://opencollective.com/' + slug
    }

    return {
      key: slug,
      src: imageUrl,
      alt: name,
      title: `Thank you ${name} for $${totalDonations.value}!`,
      href: href,
    };
  });
}

function Backer({ backer }) {
  const [loading, setLoading] = useState(true);

  return (
    <ExternalLink
      href={backer.href}
      className={classnames(styles.backer, {
        [styles.backerLoading]: loading
      })}
      title={backer.title}>
      <img src={backer.src} alt={backer.alt} onLoad={() => setLoading(false)} />
    </ExternalLink>
  )
}

function BackerBanner() {
  const [backers, setBackers] = useState([]);

  useEffect(() => {
    getBackers().then(setBackers);
  }, []);

  return (
    <div className={styles.backers}>
      {backers.map((backer) => <Backer key={backer.key} backer={backer} />)}
    </div>
  )
}

export default BackerBanner;
