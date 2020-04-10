import React from 'react';
import globalStyles from '../scss/global.module.scss';

const Button = (props) => {
  return (
    <button className={globalStyles.button__main}>
      <span className={globalStyles.uppercase}>{props.title}</span>
    </button>
  )
}

export default Button;