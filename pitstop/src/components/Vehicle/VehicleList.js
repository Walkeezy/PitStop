import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

class VehicleList extends Component {

    render() {
        const vehicles = this.props.vehicles.vehicles
        return (

            <div className="vehicle-list">
                <div className="list-header">
                    <h2 className="list-header__title">Your vehicles</h2>
                    <Link className="list-header__button button button--add-vehicle" to={routes.ADD_VEHICLE}>Add new</Link>
                </div>
                <ul className="list list--vehicles">
                    {Object.keys(vehicles).map((key, index) => {
                        return (
                            <li className="list-item" key={index}>
                                <span className="vehicles-item__namemakemodel">
                                    <span className="vehicles-item__name">{vehicles[key].name}</span>
                                    <span className="vehicles-item__makemodel">{vehicles[key].make_model}</span>
                                </span>
                                <span className="vehicles-item__edit"><Link to={routes.EDIT_VEHICLE + "/" + key} className="button">Edit</Link></span>
                            </li>
                        )
                    }) }
                </ul>
            </div>

        )
    }
}

export default VehicleList
