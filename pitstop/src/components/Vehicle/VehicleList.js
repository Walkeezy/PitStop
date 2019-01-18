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

                {Object.keys(vehicles).length === 0 &&

                    <div className="box__content">
                        <div className="notification--empty-state">
                            <p>Looks like you don't have a vehicle yet. <Link to={routes.ADD_EVENT}>Add one now!</Link></p>
                        </div>
                    </div>

                }

                {Object.keys(vehicles).length > 0 &&
                    
                    <ul className="list list--vehicles">
                        {Object.keys(vehicles).map((key, index) => {
                            return (
                                <li className="list-item" key={index}>
                                    <span className="vehicles-item__namemakemodel">
                                        <span className="vehicles-item__name">{vehicles[key].name}</span>
                                        <span className="vehicles-item__makemodel">{vehicles[key].make_model}</span>
                                    </span>
                                    <span className="vehicles-item__edit"><Link to={routes.EDIT_VEHICLE + "/" + key} className="button button--small">Edit vehicle</Link></span>
                                </li>
                            )
                        })}
                    </ul>

                }

            </div>

        )
    }
}

export default VehicleList
