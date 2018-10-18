import React, { Component } from 'react'

class VehicleSwitch extends Component {

    constructor() {
        super()
        this.handleChangeVehicle = this.handleChangeVehicle.bind(this)
    }

    handleChangeVehicle(event) {
        const vehicleId = event.target.value
        if (vehicleId) {
            this.props.saveVehicleAsActive(vehicleId)
        }
    }

    render() {
        const vehicles = this.props.vehicles.vehicles
        return (

            <select onChange={this.handleChangeVehicle} value={this.props.vehicles.activeVehicle}>
                {vehicles.map((vehicle, index) => <option key={index} value={vehicle.id}>{vehicle.name}</option>) }
            </select>

        )
    }
}

export default VehicleSwitch
