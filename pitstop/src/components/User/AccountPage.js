import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import SignOutButton from './SignOut'

class AccountPage extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Account Page</h1>

                <Link to={routes.ADD_VEHICLE}>Add Vehicle</Link>

                <SignOutButton/>

            </div>
        )
    }
}

export default AccountPage
