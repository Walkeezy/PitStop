import React, { Component } from 'react'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import PasswordForgetForm from './UserForms/PasswordForget'

class PasswordForgetPage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Reset your password" backLink={routes.SIGN_IN} />
                <div className="box">
                    <div className="box__content">
                        <PasswordForgetForm {...this.props} />
                    </div>
                </div>
            </div>

        )
    }

}

export default PasswordForgetPage
