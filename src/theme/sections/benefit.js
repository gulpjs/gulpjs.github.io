import React from 'react';
import benefitsStyles from '../scss/benefits.module.scss';

const Benefit = (props) => {
  return (
    <div className={benefitsStyles.benefit}>
      <div className={benefitsStyles.heading}>
        <img src={props.icon} alt={props.title} />
        <h3>{props.title}</h3>
      </div>
      <p>{props.text}</p>
    </div>
  )
}

export default Benefit;