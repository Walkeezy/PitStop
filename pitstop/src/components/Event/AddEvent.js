import React, { Component } from 'react'
import {withRouter} from 'react-router'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import EventForm from './EventForm'

class AddVehiclePage extends Component {

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'Add new event for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'Add new event'
        console.log('type', this.props.match.params)
        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.EVENT_TYPE} />
                <div className="content-box">
                    <EventForm {...this.props} />
                </div>
            </div>

        )
    }
}

// Needs to be withRouter to get url params
export default withRouter(AddVehiclePage)
