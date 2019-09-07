import React from 'react';

import style from './style.css';
import TheDay from "./TheDay"
import Conversation from "./Conversation"

class Dialogue extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      intervalId: null
    };
  }

  setTimer = () => {
    let intervalId = setInterval(this.setCount, 8000);
    this.setState({
      intervalId: intervalId
    });
  }

  componentDidMount() {
    setTimeout(this.closeTheDay, 1500);
    this.setTimer();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  setCount = () => {
    if (this.state.count < 6) {
      this.setState({
        count: this.state.count + 1
      });
    }
    clearInterval(this.state.intervalId);
    this.setTimer();
  }

  closeTheDay = () => {
    this.setState({
      count: 1
    });
  }

  renderBlock = () => {
    if(!this.state.count) {
      return <TheDay />;
    }
    
    return <Conversation index={this.state.count} handleOnClick={this.setCount} />;
  }

  render() {
    return (
      <div onClick={this.setCount}>
        {this.renderBlock()}
      </div>
    );
  }
}

export default Dialogue;