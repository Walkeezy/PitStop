import React, { Component } from 'react'
import { withRouter } from 'react-router'

class SignUpContainer extends Component {

    constructor() {
        super()
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleSignUp(event) {
        event.preventDefault();
        const userName = event.target.elements.userName.value
        const userMail = event.target.elements.userMail.value
        const userPassword = event.target.elements.userPassword.value
        const user = {
            username: userName,
            email: userMail,
            password: userPassword
        }
        if (userName) {
            this.props.startCreatingUser(user)
        }
    }

    render() {
        return (

            <div className="sign-up-form">

                <h1>Create your account</h1>

                <form onSubmit={this.handleSignUp}>
                    <div className="form__field">
                        <label htmlFor="userName">Your name</label>
                        <input type="text" name="userName" id="userName" />
                    </div>
                    <div className="form__field">
                        <label htmlFor="userMail">Your e-mail</label>
                        <input type="email" name="userMail" id="userMail" />
                    </div>
                    <div className="form__field field--half">
                        <label htmlFor="userPassword">Your password</label>
                        <input type="password" name="userPassword" id="userPassword" />
                    </div>
                    <div className="form__field field--half">
                        <label htmlFor="userPasswordRepeat">Repeat your password</label>
                        <input type="password" name="userPasswordRepeat" id="userPasswordRepeat" />
                    </div>
                    <div className="form__field field--submit">
                        <button type="submit" className="button--yellow">Sign up</button>
                    </div>
                </form>

            </div>

        )
    }
}

export default withRouter(SignUpContainer)
