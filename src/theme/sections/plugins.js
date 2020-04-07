import React from 'react';
import styled from 'styled-components';
import PluginsGrid from './plugins-grid';
import { isMobile } from 'react-device-detect';

const PluginContainer = styled.div`
  margin: 0 auto;
  padding: var(--big);
  align-items: center;

  @media(min-width: 768px) {
    max-width: var(--max-width-mid);
    display: grid;
    grid-template-columns: 42% 58%;
    grid-column-gap: var(--big);
  }
  
  @media(min-width: 1200px) {
    padding: var(--huge) var(--big);
    max-width: var(--max-width-large);
    grid-template-columns: 30% 58%;
    grid-column-gap: var(--max);
  }

  h3 {
    margin-top: 0;
  }
`
const PluginText = styled.div`
  align-self: baseline;
  flex-direction: column;
  align-items: top;

  h3 {
    text-align: center;

    @media(min-width: 768px) {
      text-align: left;
    }
  }

  p {
    @media(min-width: 768px) {
      margin-bottom: 0;
    }
  }
`

const Plugins = ({ props }) => {
  return (
    <PluginContainer>
      <PluginText>
        <h3>Plugins for the most popular tech</h3>
        {!isMobile &&
          <p>By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before. By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before.</p>
        }
      </PluginText>
      <PluginsGrid />
    </PluginContainer>
  )
}

export default Plugins;