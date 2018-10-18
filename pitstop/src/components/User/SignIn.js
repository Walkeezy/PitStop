import React, { Component } from 'react'
import { withRouter } from 'react-router'

class SignInContainer extends Component {

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

            </div>

        )
    }
}

export default withRouter(SignInContainer)
