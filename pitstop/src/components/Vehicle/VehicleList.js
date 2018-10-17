import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class VehicleList extends Component {

    editVehicle(vehicleId) {
        this.props.startSettingVehicleId(vehicleId)
    }

    render() {
        const vehicles = this.props.vehicles
        return (

            <div className="vehicle-list">
                <h2>Your vehicles</h2>
                <ul className="vehicle-list__list">
                    {vehicles.map((vehicle, index) => (
                        <li key={index}>
                            <span>{vehicle.name} </span>
                            <span><Link to={`/vehicle/${vehicle.id}`}>Edit vehicle</Link></span>
                            <button onClick={() => this.editVehicle(vehicle.id)}>Edit vehicle</button>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}

export default VehicleList
