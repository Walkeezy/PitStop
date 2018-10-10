import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { auth } from '../../database/config'

class SignOutButton extends Component {

    constructor() {
        super()
        this.handleSignOut = this.handleSignOut.bind(this)
    }

    handleSignOut = async event => {
        event.preventDefault();
        try {
            const user = await auth.signOut()
            this.props.history.push("/")
        } catch (error) {
            alert(error)
        }
    };

    render() {
        return (

            <button onClick={this.handleSignOut}>Sign out</button>

        )
    }
}

export default withRouter(SignOutButton)
