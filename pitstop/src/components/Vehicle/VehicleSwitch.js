import React, { Component } from 'react'

class VehicleSwitch extends Component {

    constructor() {
        super()
        this.handleChangeVehicle = this.handleChangeVehicle.bind(this)
    }

    // componentWillMount() {
    //     console.log('this.props switch', this.props);
    // }

    handleChangeVehicle(event) {
        const vehicleId = event.target.value
        if (vehicleId) {
            this.props.saveVehicleAsActive(vehicleId)
        }
    }

    render() {
        const vehicles = this.props.vehicles.vehicles
        if (vehicles && vehicles.length > 0){
            return (

                <select onChange={this.handleChangeVehicle} value={this.props.vehicles.activeVehicle}>
                    {vehicles.map((vehicle, index) => <option key={index} value={vehicle.id}>{vehicle.name}</option>)}
                </select>

            )
        } else {
            return (

                <div>No vehicles found.</div>

            )
        }
    }
}

export default VehicleSwitch
