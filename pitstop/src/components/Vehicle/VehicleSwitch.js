import React, { Component } from 'react'

class VehicleSwitch extends Component {

    render() {
        const vehicles = this.props.vehicles
        return (

            <select>
                {vehicles.map((vehicle, index) => <option key={index} value={vehicle.id}>{vehicle.name}</option>) }
            </select>

        )
    }
}

export default VehicleSwitch
