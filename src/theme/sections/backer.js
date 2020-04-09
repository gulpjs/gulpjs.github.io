import React from 'react';
import Button from '../components/button';
import backersStyles from '../scss/backers.module.scss';

const Tier = (props) => {
  return (
    <div className={backersStyles.tier}>
      <div className={backersStyles.tier__heading}>
        <img src={props.icon} alt={props.title} />
        <h4>{props.title}</h4>
      </div>
      <p>{props.text}</p>
      <Button title={props.buttonTitle} />
    </div>
  )
}

export default Tier;