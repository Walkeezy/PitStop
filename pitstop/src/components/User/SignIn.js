import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import SignInForm from './UserForms/SignIn'

class SignInPage extends Component {

    constructor() {
        super()
        this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleSignIn(event) {
        event.preventDefault()
        const userMail = event.target.elements.userMail.value
        const userPassword = event.target.elements.userPassword.value
        const user = {
            email: userMail,
            password: userPassword
        }
        if (userMail) {
            this.props.startLoginUser(user)
        }
    }

    render() {
        return (

            <div className="page">
                <Header title="Create your account" backButton="false" />
                <div className="box">
                    <div className="box__content">
                        <SignInForm {...this.props} />
                    </div>
                    <div className="box__footer box__footer--highlighted">
                        <p>Don't have an account yet? <Link to={routes.SIGN_UP}>Sign up here.</Link></p>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignInPage
