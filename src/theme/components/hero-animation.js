import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import GulpGraph from './graph';
import GulpSource from './source';

const AnimationContainer = styled.div`
  .fade-entering, .fade-exiting {
    opacity: 1%;
  }

  .fade-entered {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

  .fade-exited  {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }
`

const ViewSource = styled.div`
  margin-bottom: var(--medium);
  text-align: right;
`

const ButtonFancy = styled.button`
  background: white;
  padding: var(--small) var(--big);
  outline: none;
  max-width: 50%;
  cursor: pointer;

  color: var(--purple);
  border: 2px solid var(--purple);
  box-shadow: 7px 7px 0 2px var(--purple);
  transition: box-shadow .1s ease-in, transform .1s ease-in;

  &:hover {
    outline: none;
    transform: translate(2px, 10%);
    box-shadow: 6px 6px 0 0 var(--purple);
    transition: box-shadow .1s ease-in, transform .1s ease-in;
  }

  @media(min-width: 768px) {
    max-width: 100%;
  }
`

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {viewSource: false}
  }

  handleClick(e) {
    this.setState({
      viewSource: !this.state.viewSource
    });
  };
  
  render() {
    return (
      <AnimationContainer>
        <ViewSource>
            <ButtonFancy onClick={this.handleClick}>
              <span className="uppercase">{this.state.viewSource ? "Close Source" : "View Source"}</span>
            </ButtonFancy> 
        </ViewSource>
          <Transition in={!this.state.viewSource} timeout={{appear: 50, enter: 50, exit: 50}}>
            {state => (
              <div className={`fade fade-${state}`}>{this.state.viewSource ? <GulpSource /> : <GulpGraph />}</div>
            )}
          </Transition>
      </AnimationContainer>
    )
  } 
}

export default Animation;

