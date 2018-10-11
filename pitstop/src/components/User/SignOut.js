import React, { Component } from 'react'
import { withRouter } from 'react-router'

class SignOutButton extends Component {

    constructor() {
        super()
        this.handleSignOut = this.handleSignOut.bind(this)
    }

    handleSignOut(event) {
        event.preventDefault();
        this.props.signOutUser()
    }

    render() {
        return (

            <button onClick={this.handleSignOut}>Sign out</button>

        )
    }
}

export default withRouter(SignOutButton)
