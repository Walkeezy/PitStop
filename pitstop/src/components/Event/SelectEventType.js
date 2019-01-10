import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Icon from './../Layout/Icons'

import Header from './../Layout/Header'

class EventTypePage extends Component {

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'Add new event for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'Add new event'
        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.HOME} />
                <div className="box">
                    <div className="box__header">
                        <label className="link-list-label">Please select</label>
                    </div>
                    <ul className="list link-list">
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.ADD_EVENT + "/refuel"}>
                                <div className="link-list-item__icon icon icon--refuel"><Icon name="fuel" /></div>
                                Refuel
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.ADD_EVENT + "/oil-refill"}>
                                <div className="link-list-item__icon icon icon--oil-refill"><Icon name="oil" /></div>
                                Oil refill
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.ADD_EVENT + "/tires-change"}>
                                <div className="link-list-item__icon icon icon--tires-change"><Icon name="wheel" /></div>
                                Tire change
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.ADD_EVENT + "/oil-change"}>
                                <div className="link-list-item__icon icon icon--oil-change"><Icon name="funnel" /></div>
                                Oil change
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.ADD_EVENT + "/inspection-service"}>
                                <div className="link-list-item__icon icon icon--inspection-service"><Icon name="breakdown" /></div>
                                Inspection/Service
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default EventTypePage
