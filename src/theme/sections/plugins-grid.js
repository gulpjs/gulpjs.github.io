import React from 'react';
import styled from 'styled-components';
import Plugin from './plugin';

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

const PluginsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 168px);
  align-items: center;
  justify-content: center;
  grid-column-gap: var(--medium);
  grid-row-gap: var(--medium);

  @media(min-width: 1200px) {
    grid-template-columns: repeat(3, 184px);
    grid-column-gap: var(--big);
    grid-row-gap: var(--big);
  }  
`

const PluginsGrid = (props) => {
  return (
    <PluginsContainer>
      {plugins.map((plugin, index) => <Plugin key={index} title={plugin.title} imgSrc={useBaseUrl(plugin.img)}/>)}
    </PluginsContainer>
  )
}

export default PluginsGrid;