import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { auth } from '../../database/config'

class SignUpContainer extends Component {

    constructor() {
        super()
        this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleSignIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements
        try {
            const user = await auth.signInWithEmailAndPassword(email.value, password.value)
            this.props.history.push("/")
        } catch (error) {
            alert(error)
        }
    };

    render() {
        return (

            <div>
                <h1>Sign in</h1>
                <form onSubmit={this.handleSignIn}>
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
