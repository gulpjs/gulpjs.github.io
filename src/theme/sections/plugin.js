import React from 'react';
import pluginsStyles from '../scss/plugins.module.scss';

const Plugin = (props) => {
  return (
    <div className={pluginsStyles.plugin}>
      <img src={props.imgSrc} alt={props.title} />
      <span>{props.title}</span>
    </div>
  )
}

export default Plugin;