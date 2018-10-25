import React, { Component } from 'react'

import Header from './../Layout/Header'
import VehicleList from '../Vehicle/VehicleList'
import SignOutButton from './SignOut'

class AccountPage extends Component {

    render() {
        const firstname = this.props.user.details.firstname
        return (

            <div className="page">
                <Header title="Your account" />
                <div className="content-box">
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
