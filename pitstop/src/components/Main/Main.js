import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import HomePage from '../Home/Home'
import SignUpPage from '../User/SignUp'
import SignInPage from '../User/SignIn'
import PasswordForgetPage from '../User/PasswordForget'
import AddVehiclePage from '../Vehicle/AddVehicle'
import AddEventPage from '../Vehicle/AddEvent'
import AccountPage from '../User/AccountPage'
import StatisticPage from '../Vehicle/VehicleStatistic'

import * as routes from '../../constants/routes'

class Main extends Component {

    componentDidMount() {
        this.props.verifyUser()
    }

    render() {
        return (

            <div className="app">
                <Header />
                <div className="view">
                    <PrivateRoute exact path={routes.HOME} component={HomePage} {...this.props} />
                    <Route exact path={routes.SIGN_UP} render={() => <SignUpPage {...this.props} />} />
                    <Route exact path={routes.SIGN_IN} render={() => <SignInPage {...this.props} />} />
                    <Route exact path={routes.PASSWORD_FORGET} render={() => <PasswordForgetPage {...this.props} />} />
                    <PrivateRoute exact path={routes.ADD_VEHICLE} component={AddVehiclePage} {...this.props} />
                    <PrivateRoute exact path={routes.ADD_EVENT} component={AddEventPage} {...this.props} />
                    <PrivateRoute exact path={routes.ACCOUNT} component={AccountPage} {...this.props} />
                    <PrivateRoute exact path={routes.STATISTIC} component={StatisticPage} {...this.props} />
                </div>
                <Footer />
            </div>

        )
    }

}

export default Main
