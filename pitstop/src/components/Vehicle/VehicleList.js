import React, { Component } from 'react'
import {history} from '../../history'
import * as routes from '../../constants/routes'

class VehicleList extends Component {

    constructor() {
        super()
        this.handleEditVehicle = this.handleEditVehicle.bind(this)
    }

    handleEditVehicle(vehicleId) {
        if (vehicleId) {
            this.props.setVehicleToEdit(vehicleId)
            history.push(routes.ADD_VEHICLE)
        }
    }

    render() {
        const vehicles = this.props.vehicles.vehicles
        return (

            <div className="vehicle-list">
                <h2>Your vehicles</h2>
                <ul className="vehicle-list__list">
                    {Object.keys(vehicles).map((key, index) => {
                        return (
                            <li key={index}>
                                <span>{vehicles[key].name}</span>
                                <button onClick={() => this.handleEditVehicle(key)}>Edit vehicle</button>
                            </li>
                        )
                    }) }
                </ul>
            </div>

        )
    }
}

export default VehicleList
