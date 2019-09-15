import React from 'react';
import ReactDOM from 'react-dom';

import style from './style.css';

import Home from './Home';
import Dialogue from './Dialogue';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      listenToAma: false
    };
  }

  btnCallback = () => {
    this.setState({
      listenToAma: true
    });
  };

  renderPage() {
    if(this.state.listenToAma) {
      return <Dialogue />;
    } else {
      return <Home btnCallback={this.btnCallback} />;
    }
  } 

  render() {
    return (
      <div className="body">
        {this.renderPage()}
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('#root'));