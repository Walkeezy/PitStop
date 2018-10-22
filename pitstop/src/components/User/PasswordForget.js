import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import PasswordForgetForm from './PasswordForgetForm'

class PasswordForgetPage extends Component {

    render() {
        return (

            <div className="password-forget-form">
                <h1>Reset your password</h1>
                <PasswordForgetForm {...this.props} />
                <p>Remember your password? <Link to={routes.SIGN_IN}>Login here!</Link></p>
            </div>

        )
    }

}

export default PasswordForgetPage
