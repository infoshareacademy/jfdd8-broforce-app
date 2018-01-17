import React, { Component } from 'react'

class Timer extends Component {

  state = {
    time: 60 * 15
  };

  componentWillMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: this.state.time - 1 })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>{Math.floor(this.state.time / 60).toString().padStart(2, '0')} : {(this.state.time % 60).toString().padStart(2, '0')}</div>
    )
  }
}

export default Timer