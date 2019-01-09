import React, { Component } from 'react'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import PasswordChangeForm from './UserForms/PasswordChange'

class PasswordChangePage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Change your password" backLink={routes.ACCOUNT} />
                <div className="box">
                    {this.props.error.message &&
                        <div className="box__error">
                            <p>{this.props.error.message}</p>
                        </div>
                    }
                    <div className="box__content">
                        <PasswordChangeForm {...this.props} />
                    </div>
                </div>
            </div>

        )
    }

    componentWillUnmount() {
        this.props.removeError()
    }

}

export default PasswordChangePage
