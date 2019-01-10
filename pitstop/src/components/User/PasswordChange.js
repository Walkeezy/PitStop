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
                    {this.props.notifications.active &&
                        <div className={'notification notification--' + this.props.notifications.type}>
                            <p>{this.props.notifications.message}</p>
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
        this.props.notifications.type === 'error' && this.props.removeNotification()
    }

}

export default PasswordChangePage
