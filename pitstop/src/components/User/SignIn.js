import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'

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
                <Header title="Sign in to your account" backButton="false" />
                <div className="box">
                    <div className="box__content">
                        <form onSubmit={this.handleSignIn}>
                            <div className="form__field">
                                <label htmlFor="userMail">Your e-mail</label>
                                <input type="email" name="userMail" id="userMail" />
                            </div>
                            <div className="form__field">
                                <label htmlFor="userPassword">Your password</label>
                                <input type="password" name="userPassword" id="userPassword" />
                            </div>
                            <div className="form__field field--submit">
                                <button type="submit" className="button--yellow">Sign in</button>
                                <div className="lost-password">Lost your password? <Link to={routes.PASSWORD_FORGET}>Reset it here.</Link></div>
                            </div>
                        </form>
                    </div>
                    <div className="box__footer">
                        <p>Don't have an account yet? <Link to={routes.SIGN_UP}>Sign up here.</Link></p>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignInPage
