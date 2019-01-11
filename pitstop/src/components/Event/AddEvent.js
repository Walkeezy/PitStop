import React, { Component } from 'react'
import { withRouter } from 'react-router'
import * as routes from '../../constants/routes'
import Header from './../Layout/Header'
import EventForm from './EventForm'

class AddEventPage extends Component {

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'Add event for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'Add event'

        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.ADD_EVENT} />
                <div className="box">
                    {this.props.notifications.active &&
                        <div className={'notification notification--' + this.props.notifications.type}>
                            <p>{this.props.notifications.message}</p>
                        </div>
                    }
                    <div className="box__content">
                        <EventForm {...this.props} />
                    </div>
                </div>
            </div>

        )
    }
}

// Needs to be withRouter to get url params
export default withRouter(AddEventPage)
