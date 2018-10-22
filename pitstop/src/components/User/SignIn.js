import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

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

            <div className="sign-in-form">

                <h1>Login</h1>

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
                        <button type="submit" className="button--yellow">Login</button>
                    </div>
                </form>

                <p>Lost your password? <Link to={routes.PASSWORD_FORGET}>Reset it here!</Link></p>
                <p>Don't have an account yet? <Link to={routes.SIGN_UP}>Sign up here!</Link></p>

            </div>

        )
    }
}

export default SignInPage
