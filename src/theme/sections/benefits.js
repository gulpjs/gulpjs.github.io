import React from 'react';
import Benefit from './benefit';

import benefitsStyles from '../scss/benefits.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Benefits = (props) => {
  return (
    <div className={benefitsStyles.benefits}>
      <Benefit icon={useBaseUrl('img/code-block.svg')} title="Simple Usage" text="By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before."/>
      <Benefit icon={useBaseUrl('img/timer.svg')} title="Efficient Builds" text="Using the power of node streams, gulp gives you fast builds that don’t write intermediary files to disk. Using the power of node streams, gulp gives you fast builds that don’t write intermediary files to disk."/>
      <Benefit icon={useBaseUrl('img/system.svg')} title="Quality Ecosystem" text="By enforcing strict guidelines, we ensure our plugins stay simple and work as expected. By enforcing strict guidelines, we ensure our plugins stay simple and work as expected."/>
    </div>
  )
}

export default Benefits;