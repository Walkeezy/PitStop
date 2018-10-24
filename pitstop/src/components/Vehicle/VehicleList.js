import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

class VehicleList extends Component {

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
                                <Link className="button" to={routes.EDIT_VEHICLE + "/" + key}>Edit vehicle</Link>
                            </li>
                        )
                    }) }
                </ul>
            </div>

        )
    }
}

export default VehicleList
