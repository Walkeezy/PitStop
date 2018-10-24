import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import VehicleList from '../Vehicle/VehicleList'
import SignOutButton from './SignOut'

class AccountPage extends Component {

    render() {
        const firstname = this.props.user.details.firstname
        return (

            <div className="page">
                <Header title="Your account" />
                <div className="page__content">
                    <p>Welcome {firstname}!</p>
                    <p><Link to={routes.ADD_VEHICLE}>Add Vehicle</Link></p>
                    <VehicleList {...this.props} />
                    <p><SignOutButton {...this.props} /></p>
                </div>
            </div>

        )
    }
}

export default AccountPage
