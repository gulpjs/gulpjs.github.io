import React from 'react';
import Tier from './backer';
import backersStyles from '../scss/backers.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Backers = (props) => {
  return (
    <div className={backersStyles.backers__grid}>
      <Tier title="Donate once" text='Make a custom one time or recurring contribution to support this collective.' buttonTitle='donate' icon={useBaseUrl('img/bat.svg')} />
      <Tier title="Donate once a month"  text='Support us with a monthly donation and help us continue our activities.' buttonTitle='donate' icon={useBaseUrl('img/rocket.svg')} />
      <Tier title="Unknown tier 3" text='Become a sponsor and get your logo on our README with a link to your site.' buttonTitle='donate' icon={useBaseUrl('img/beer.svg')} />
    </div>
  )
}

export default Backers;