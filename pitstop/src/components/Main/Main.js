import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import Footer from '../Layout/Footer'
import HomePage from '../Home/Home'
import SignUpPage from '../User/SignUp'
import SignInPage from '../User/SignIn'
import PasswordForgetPage from '../User/PasswordForget'
import AddVehiclePage from '../Vehicle/AddVehicle'
import EditVehiclePage from '../Vehicle/EditVehicle'
import AddEventPage from '../Event/AddEvent'
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
                <PrivateRoute exact path={routes.HOME} component={HomePage} {...this.props} />
                <Route exact path={routes.SIGN_UP} render={() => <SignUpPage {...this.props} />} />
                <Route exact path={routes.SIGN_IN} render={() => <SignInPage {...this.props} />} />
                <Route exact path={routes.PASSWORD_FORGET} render={() => <PasswordForgetPage {...this.props} />} />
                <PrivateRoute exact path={routes.ADD_VEHICLE} component={AddVehiclePage} {...this.props} />
                <PrivateRoute exact path='/edit-vehicle/:id' component={EditVehiclePage} {...this.props} />
                <PrivateRoute exact path={routes.ADD_EVENT} component={AddEventPage} {...this.props} />
                <PrivateRoute exact path={routes.ACCOUNT} component={AccountPage} {...this.props} />
                <PrivateRoute exact path={routes.STATISTIC} component={StatisticPage} {...this.props} />
                <Footer />
            </div>

        )
    }

}

export default Main
