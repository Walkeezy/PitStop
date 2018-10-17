import React, { Component } from 'react'

class VehicleList extends Component {

    constructor() {
        super()
        this.handleEditVehicle = this.handleEditVehicle.bind(this)
    }

    handleEditVehicle(vehicleId) {
        console.log(vehicleId)
        if (vehicleId) {
            this.props.setVehicleToEdit(vehicleId)
        }
    }

    render() {
        const vehicles = this.props.vehicles.vehicles
        return (

            <div className="vehicle-list">
                <h2>Your vehicles</h2>
                <ul className="vehicle-list__list">
                    {vehicles.map((vehicle, index) => (
                        <li key={index}>
                            <span>{vehicle.name} </span>
                            <button onClick={() => this.handleEditVehicle(vehicle.id)}>Edit vehicle</button>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}

export default VehicleList
