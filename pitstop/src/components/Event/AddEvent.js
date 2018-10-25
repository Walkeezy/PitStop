import React, { Component } from 'react'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import EventForm from './EventForm'

class AddVehiclePage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Add new event" backLink={routes.ACCOUNT} />
                <div className="content-box">
                    <EventForm {...this.props} />
                </div>
            </div>

        )
    }
}

export default AddVehiclePage
