import React, {Component} from 'react';

class StopWatch extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        const {count} = this.state;
        this.setState({count: count + 1});
      }, 1000);
    }
  }

  stop () {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset () {
    this.stop();
    this.setState({count: 0});
  }

  render () {
    return (
      <div className='StopWatch'>
        <strong>Count:</strong> {this.state.count}
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
