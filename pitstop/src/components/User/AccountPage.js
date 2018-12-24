import React, { Component } from 'react'

import Header from './../Layout/Header'
import VehicleList from '../Vehicle/VehicleList'
import SignOutButton from './SignOut'

class AccountPage extends Component {

    componentDidMount() {
        if (Object.keys(this.props.vehicles.vehicles).length === 1) {
            this.props.saveVehicleAsActive(Object.keys(this.props.vehicles.vehicles)[0])
        }
    }

    render() {
        const firstname = this.props.user.details.firstname

        return (

            <div className="page">
                <Header title="Your account" />
                <div className="content-box">
                    <h2>Your account</h2>
                    <p>Welcome {firstname}!</p>
                    <p><SignOutButton {...this.props} /></p>
                </div>
                <div className="content-box box--no-padding">
                    <VehicleList {...this.props} />
                </div>
            </div>

        )
    }
}

export default AccountPage
