import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

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
                <div className="box">
                    <div className="box__header">
                        <h2>Your account</h2>
                        <SignOutButton {...this.props} />
                    </div>
                    <div className="box__content">
                        <p>Welcome {firstname}!</p>
                        <p>Thanks for using PitStop.</p>
                        <Link to={routes.PASSWORD_CHANGE}>Change password</Link>
                    </div>
                </div>
                <div className="box">
                    <VehicleList {...this.props} />
                </div>
            </div>

        )
    }
}

export default AccountPage
