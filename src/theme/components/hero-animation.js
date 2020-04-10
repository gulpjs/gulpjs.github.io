import React from 'react';

import { Transition } from 'react-transition-group';
import heroStyles from '../scss/hero.module.scss';
import globalStyles from '../scss/global.module.scss';

import GulpGraph from './graph';
import GulpSource from './source';

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {viewSource: false}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      viewSource: !this.state.viewSource
    });
  };
  
  render() {
    return (
      <div className={heroStyles.hero__animation}>
        <div className={heroStyles.animation__button}>
          <button onClick={this.handleClick}>
            <span className={globalStyles.uppercase}>{this.state.viewSource ? "Close Source" : "View Source"}</span>
          </button> 
        </div>
          <Transition in={!this.state.viewSource} timeout={{appear: 50, enter: 50, exit: 50}}>
            {state => (
              <div className={`${heroStyles.fade} ${state}`}>{this.state.viewSource ? <GulpSource /> : <GulpGraph />}</div>
            )}
          </Transition>
      </div>
    )
  } 
}

export default Animation;

