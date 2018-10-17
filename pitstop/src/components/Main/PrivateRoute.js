import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as routes from '../../constants/routes'

class PrivateRoute extends Component {

    render() {
        // Unpack values from props into variables (Destructuring assignment)
        const { component: Component, authed, loading, ...rest } = this.props

        const renderRoute = props => {
            // If state is still loading or user is logged in
            if (loading === true || authed === true) {
                return (
                    <Component {...props} />
                )
            }

            // or else redirect to sign in page
            return (
                <Redirect to={routes.SIGN_IN} />
            )
        }

        return (
            <Route {...rest} render={renderRoute} />
        )

    }
}

export default PrivateRoute
