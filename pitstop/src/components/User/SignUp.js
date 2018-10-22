import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import SignUpForm from './SignUpForm'

class SignUpPage extends Component {

    render() {
        return (

            <div className="sign-up-form">
                <h1>Create your account</h1>
                <SignUpForm {...this.props} />
                <p>Already have an account? <Link to={routes.SIGN_IN}>Login here!</Link></p>
            </div>

        )
    }

}

export default SignUpPage
