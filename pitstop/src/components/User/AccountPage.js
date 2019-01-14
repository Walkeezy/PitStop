import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Icon from '../Layout/Icons'
import Header from './../Layout/Header'
import VehicleList from '../Vehicle/VehicleList'
import SignOutButton from './SignOut'

class AccountPage extends Component {

    constructor() {
        super()
        this.handleRemoveNotification = this.handleRemoveNotification.bind(this)
    }

    handleRemoveNotification(event) {
        event.preventDefault();
        this.props.removeNotification()
    }

    render() {
        return (

            <div className="page">
                <Header title="Your account" />
                {this.props.notifications.active &&
                    <div className={'notification notification--standalone notification--' + this.props.notifications.type}>
                        <p>{this.props.notifications.message}</p>
                        <button className="hide-notification" onClick={this.handleRemoveNotification}><Icon name="plus" width="18px" fill='#FFF' /></button>
                    </div>
                }
                <div className="box">
                    <div className="box__header">
                        <h2>Your account</h2>
                        <SignOutButton {...this.props} />
                    </div>
                    <ul className="list link-list">
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.PASSWORD_CHANGE}>
                                Change password
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <VehicleList {...this.props} />
                </div>
            </div>

        )
    }

    componentWillUnmount() {
        this.props.removeNotification()
    }
}

export default AccountPage
