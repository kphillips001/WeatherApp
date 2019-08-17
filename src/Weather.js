import React, { Component } from 'react';

class Weather extends Component {
  render () {
    return (
      <div>
        <p>City: { this.props.city } </p>
        <p>Location: { this.props.country }</p>
        <p>Temperature: { this.props.temperature }</p>
        <p>Humidity: { this.props.humidity }</p>
        <p>Conditions: { this.props.description }</p>
      </div>
    )
  }
}

export default Weather; 