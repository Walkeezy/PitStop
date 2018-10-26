import React, { Component } from 'react'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import EventForm from './EventForm'

class AddVehiclePage extends Component {

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'Add new event for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'Add new event'
        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.ACCOUNT} />
                <div className="content-box">
                    <EventForm {...this.props} />
                </div>
            </div>

        )
    }
}

export default AddVehiclePage
