import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import SignUpForm from './UserForms/SignUp'

class SignUpPage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Create your account" backButton="false" />
                <div className="box">
                    {this.props.notifications.active &&
                        <div className={'notification notification--' + this.props.notifications.type}>
                            <p>{this.props.notifications.message}</p>
                        </div>
                    }
                    <div className="box__content">
                        <SignUpForm {...this.props} />
                    </div>
                    <div className="box__footer box__footer--highlighted">
                        <p>Already have an account? <Link to={routes.SIGN_IN}>Sign in here.</Link></p>
                    </div>
                </div>
            </div>

        )
    }

    componentWillUnmount() {
        this.props.notifications.type === 'error' && this.props.removeNotification()
    }

}

export default SignUpPage
