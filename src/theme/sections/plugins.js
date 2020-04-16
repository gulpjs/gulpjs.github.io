import React from 'react';

import PluginsGrid from './plugins-grid';
import { isMobile } from 'react-device-detect';

import pluginsStyles from '../scss/plugins.module.scss';

const Plugins = ({ props }) => {
  return (
    <div className={pluginsStyles.plugins}>
      <div className={pluginsStyles.plugins__text}>
        <h3>Plugins for the most popular tech</h3>
        {!isMobile &&
          <p>By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before.</p>
        }
      </div>
      <PluginsGrid />
    </div>
  )
}

export default Plugins;