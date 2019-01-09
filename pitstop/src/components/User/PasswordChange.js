import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import PasswordChangeForm from './UserForms/PasswordChange'

class PasswordChangePage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Change your password" backLink={routes.ACCOUNT} />
                <div className="box">
                    <div className="box__content">
                        <PasswordChangeForm {...this.props} />
                    </div>
                    <div className="box__footer box__footer--highlighted">
                        <p>Remember your password? <Link to={routes.SIGN_IN}>Sign in here.</Link></p>
                    </div>
                </div>
            </div>

        )
    }

}

export default PasswordChangePage
