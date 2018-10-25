import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import PasswordForgetForm from './PasswordForgetForm'

class PasswordForgetPage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Reset your password" backButton="false" />
                <div className="content-box">
                    <PasswordForgetForm {...this.props} />
                    <p>Remember your password? <Link to={routes.SIGN_IN}>Sign in here!</Link></p>
                </div>
            </div>

        )
    }

}

export default PasswordForgetPage
