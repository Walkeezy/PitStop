import React, { Component } from 'react';

class LogEntry extends Component {
  render() {
    const entry = this.props.entry;

    return (

      <div>
        <h2>{entry.type}</h2>
        <p>{entry.amount} liters<br/>
          {entry.cost} CHF<br/>
          {entry.mileage} km</p>
      </div>

    )
  }
}

export default LogEntry