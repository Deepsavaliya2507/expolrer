import React, { Component } from 'react'

export default class Classbaseclock extends Component {
  
  componentDidMount() {
    this.intervalID = setInterval(() =>
      this.updateClock(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    const time = new Date().toLocaleTimeString();
    return (
      <div>
        <div>
          <center>
            <h1>
              {time}
            </h1>
          </center>
        </div>
      </div>
    )
  }
}
