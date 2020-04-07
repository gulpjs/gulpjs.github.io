import React from 'react';
import styled, { keyframes } from 'styled-components';

import useBaseUrl from '@docusaurus/useBaseUrl';
// const animatedSvg = useBaseUrl('img/gulp-graph1.svg');

// import { ReactComponent as GulpVisual } from animatedSvg;

const fill = keyframes`
  0% {
    stroke-dasharray: 100 400;
    stroke-dashoffset: 200;
  }

  50% {
    stroke: var(--red);
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dasharray: 100 400;
    stroke-dashoffset: -200;
  }
`

const opacity = keyframes`
  0%, 50%, 75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const stroke = keyframes`
  from {
    stroke-dashoffset: 900;
  }

  to {
    stroke-dashoffset: 0;
  }
`

const GulpVisual = styled.object` 
  width: 100%;
  height: 100%;

  .line-up-anim {
    animation: ${fill} infinite 3s linear;
    
    &.second {
      animation: ${opacity} 2s linear forwards, ${fill} infinite 3s linear 1s;
    }
  }

  .line-down-anim {
    animation: ${opacity} 4s linear forwards, ${fill} infinite 3s linear 2.3s;

    &.second {
      animation-delay: .5s;
    }
  }

  .line-rectangle {
    opacity: 0;
    animation: 3s ${opacity} infinite 1s ease-out;
  }
`

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-column-gap: var(--big);
  padding: 0 var(--big);

  p {
    margin-top: 0;
  }

  .uppercase {
    margin: 0;
    color: var(--red);
  }
`
const Graph = (props) => {
  return (
    <div>
      <TechList>
        <li>
          <p className="uppercase">pug</p>
          <p>or any otehr templating language</p>
        </li>
        <li>
          <p className="uppercase">sass</p>
          <p>or any otehr templating language</p>
        </li>
        <li>
          <p className="uppercase">js</p>
          <p>or any otehr templating language</p>
        </li>
      </TechList>
      <GulpVisual type="image/svg+xml" data={useBaseUrl('img/gulp-graph1.svg')} />
      <TechList>
        <li>
          <p className="uppercase">html</p>
          <p>or any otehr templating language</p>
        </li>
        <li>
          <p className="uppercase">css</p>
          <p>or any otehr templating language</p>
        </li>
        <li>
          <p className="uppercase">js</p>
          <p>or any otehr templating language</p>
        </li>
      </TechList>
    </div>
  )
}

export default Graph;