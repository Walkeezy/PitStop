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
                <div className="content">
                    <div className="select-event">
                        <div className="select-event__item">
                            <Link to={routes.ADD_EVENT + "/refuel"}>
                                <div className="event__icon"><Icon name="fuel"/></div>
                            </Link>
                        </div>
                        <div className="select-event__item">
                            <Link to={routes.ADD_EVENT + "/tires-change"}>
                                <div className="event__icon"><Icon name="wheel"/></div>
                            </Link>
                        </div>
                        <div className="select-event__item">
                            <Link to={routes.ADD_EVENT + "/oil-refill"}>
                                <div className="event__icon"><Icon name="oil"/></div>
                            </Link>
                        </div>
                        <div className="select-event__item">
                            <Link to={routes.ADD_EVENT + "/oil-change"}>
                                <div className="event__icon"><Icon name="funnel"/></div>
                            </Link>
                        </div>
                        <div className="select-event__item">
                            <Link to={routes.ADD_EVENT + "/inspection-service"}>
                                <div className="event__icon"><Icon name="breakdown"/></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default EventTypePage