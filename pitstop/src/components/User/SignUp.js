import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { auth } from '../../database/config'

class SignUpContainer extends Component {

    constructor() {
        super()
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements
        try {
            const user = await auth.createUserWithEmailAndPassword(email.value, password.value)
            this.props.history.push("/")
        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (

            <div>
                <h1>Sign up</h1>
                <form onSubmit={this.handleSignUp}>
                    <label>
                        Email
          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </label>
                    <label>
                        Password
          <input
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>

        )
    }
}

export default withRouter(SignUpContainer)
