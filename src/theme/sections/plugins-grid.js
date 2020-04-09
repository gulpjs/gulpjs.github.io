import React from 'react';
import Plugin from './plugin';
import pluginsStyles from '../scss/plugins.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';

const plugins = [
  {
    title: 'angular',
    img: 'img/angular.svg'
  },
  {
    title: 'babel',
    img: 'img/babel.svg'
  },
  {
    title: 'bower',
    img: 'img/bower.svg'
  },
  {
    title: 'buddy',
    img: 'img/buddy.svg'
  },
  {
    title: 'coffeescript',
    img: 'img/coffeescript.svg'
  },
  {
    title: 'pug',
    img: 'img/pug.svg'
  }
]

const PluginsGrid = (props) => {
  return (
    <div className={pluginsStyles.plugins__grid}>
      {plugins.map((plugin, index) => <Plugin key={index} title={plugin.title} imgSrc={useBaseUrl(plugin.img)}/>)}
    </div>
  )
}

export default PluginsGrid;