import React, {Component} from 'react';

class Timer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date().toString()
    };
  }

  componentDidMount () {
    this.intervalId = setInterval(() => {
      this.setState({time: new Date().toString() });
    })
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }

  render () {
    return (
      <div className='Timer'>
        <strong>Time:</strong> { this.state.time }
      </div>
    )
  }
}

export default Timer;
