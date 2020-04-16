import React from 'react';
import BackersGrid from './backers-grid';
import backersStyles from '../scss/backers.module.scss';

const Backers = ({ props }) => {
  return (
    <div className={backersStyles.backers}>
      <div className={backersStyles.backers__text}>
        <h3>Individual backers</h3>
        <p>Our mission statement. node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before.</p>
      </div>
      <BackersGrid />
    </div>
  )
}

export default Backers;