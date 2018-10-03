import React, { Component } from 'react'
import PropTypes from 'prop-types'

class VehicleLogEntry extends Component {
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

VehicleLogEntry.propTypes = {
  entry: PropTypes.object.isRequired
}

export default VehicleLogEntry
