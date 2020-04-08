import React from 'react';
import Benefit from './benefit';
import styled from 'styled-components';

import useBaseUrl from '@docusaurus/useBaseUrl';

const BenefitsContainer = styled.div`
  margin: 0 auto;
  padding: var(--big);
  display: grid;
  grid-row-gap: var(--big);

  @media(min-width: 768px) {
    max-width: var(--max-width-large);
    grid-template-columns: repeat(3, 32%);
    align-items: start;
    grid-column-gap: var(--small);
    grid-row-gap: 0;
  }

  @media(min-width: 1200px) {
    padding: var(--huge) var(--big);
    grid-template-columns: repeat(3, 28%);
    grid-column-gap: calc(var(--xxl) + 1vw);
  }
`

const Benefits = (props) => {
  return (
    <BenefitsContainer>
      <Benefit icon={useBaseUrl('img/code-block.svg')} title="Simple Usage" text="By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before."/>
      <Benefit icon={useBaseUrl('img/timer.svg')} title="Efficient Builds" text="Using the power of node streams, gulp gives you fast builds that don’t write intermediary files to disk. Using the power of node streams, gulp gives you fast builds that don’t write intermediary files to disk."/>
      <Benefit icon={useBaseUrl('img/system.svg')} title="Quality Ecosystem" text="By enforcing strict guidelines, we ensure our plugins stay simple and work as expected. By enforcing strict guidelines, we ensure our plugins stay simple and work as expected."/>
    </BenefitsContainer>
  )
}

export default Benefits;