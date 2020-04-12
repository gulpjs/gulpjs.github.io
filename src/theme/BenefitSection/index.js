import React from 'react';
import classnames from 'classnames';

import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './benefits.module.scss';

function BenefitSection(props) {
  return (
    <div className={styles.benefits}>
      <div className={classnames('card', styles.benefitCard)}>
        <div className="card__image">
          <img
            src={useBaseUrl('img/flexible.png')}
            alt="Flexible sample"
          />
        </div>
        <div className="card__header">
          <h2>Flexible</h2>
        </div>
        <div className="card__body">
          <p>
            Using code over configuration, utilize all of JavaScript to create your gulpfile—where tasks can be written using your own code or chained single purpose plugins.
          </p>
        </div>
      </div>
      <div className={classnames('card', styles.benefitCard)}>
        <div className="card__image">
          <img
            src={useBaseUrl('img/composable.png')}
            alt="Composable sample"
          />
        </div>
        <div className="card__header">
          <h2>Composable</h2>
        </div>
        <div className="card__body">
          <p>
            Write individual, focused tasks and compose them into larger operations, providing you with speed and accuracy while reducing repetition.
          </p>
        </div>
      </div>
      <div className={classnames('card', styles.benefitCard)}>
        <div className="card__image">
          <img
            src={useBaseUrl('img/efficient.png')}
            alt="Efficient sample"
          />
        </div>
        <div className="card__header">
          <h2>Efficient</h2>
        </div>
        <div className="card__body">
          <p>
            By using gulp streams, you can apply many transformations to your files while in memory before anything is written to the disk—significantly speeding up your build process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BenefitSection;
