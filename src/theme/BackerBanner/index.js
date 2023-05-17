import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import shuffle from 'lodash.shuffle';
import ExternalLink from '@theme/ExternalLink';

import styles from './banner.module.scss';

const sponsorsURL = 'https://serve.onegraph.com/graphql?app_id=c8251aa1-22ab-4dca-9e57-e7c335ddcd7c';

function between5And250(backer) {
  if (!backer.tier) {
    return false;
  }

  const amount = backer.tier.amountDonated;
  if (amount >= 500 && amount < 25000) {
    return true;
  }

  return false;
}

function selectRandom(backers) {
  return shuffle(backers).slice(0, 12);
}

async function getBackers() {
  const response = await fetch(sponsorsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      doc_id: 'fe685787-b348-42a4-960c-2322add1e11b',
    }),
  });

  // TODO: Handle errors
  const { data, errors } = await response.json();

  let ghBackers = data.gitHub.organization.sponsors.nodes;
  let ocBackers = data.openCollective.organization.sponsors.nodes;
  let allBackers = [].concat(ghBackers, ocBackers);

  const validBackers = allBackers.filter(between5And250);

  const backersToDisplay = selectRandom(validBackers)

  return backersToDisplay.reduce(function (results, backer) {
    if (!backer.sponsor) {
      return results;
    }

    const {
      name,
      openCollectiveHandle,
      twitterHandle,
      githubHandle,
      avatarUrl
    } = backer.sponsor;
    // It is in US cents
    const monthlyAmount = backer.tier ? (backer.tier.amountDonated / 100) : 0;

    let href;
    if (githubHandle) {
      href = `https://github.com/${githubHandle}`;
    } else if (twitterHandle) {
      href = `https://twitter.com/${twitterHandle}`;
    } else {
      href = `https://opencollective.com/${openCollectiveHandle}`
    }

    let usersName = name || githubHandle || twitterHandle || openCollectiveHandle || '';

    results.push({
      key: href,
      src: avatarUrl,
      alt: usersName,
      title: monthlyAmount ? `Thank you ${usersName} for the $${monthlyAmount}/month!` : `Thank you ${usersName} for the support!`,
      href: href,
    });

    return results;
  }, []);
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
