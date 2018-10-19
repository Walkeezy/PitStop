import React, { Component } from 'react'

import SignUpForm from './SignUpForm'

class SignUpPage extends Component {

    render() {
        return (

            <div className="sign-up-form">
                <h1>Create your account</h1>
                <SignUpForm {...this.props} />
            </div>

        )
    }

}

export default SignUpPage
