import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import SignUpForm from './SignUpForm'

class SignUpPage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Create your account" backButton="false" />
                <div className="page__content">
                    <SignUpForm {...this.props} />
                    <p>Already have an account? <Link to={routes.SIGN_IN}>Login here!</Link></p>
                </div>
            </div>

        )
    }

}

export default SignUpPage
