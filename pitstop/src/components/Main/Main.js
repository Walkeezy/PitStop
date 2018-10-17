import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import HomePage from '../Home/Home'
import SignUpPage from '../User/SignUp'
import SignInPage from '../User/SignIn'
import AddVehiclePage from '../Vehicle/AddVehicle'
import AddEventPage from '../Vehicle/AddEvent'
import AccountPage from '../User/AccountPage'
import StatisticPage from '../Vehicle/VehicleStatistic'
import VehicleDetails from '../Vehicle/VehicleDetails'

import * as routes from '../../constants/routes'

class Main extends Component {

    componentDidMount() {
        this.props.verifyUser()
    }

    render() {
        console.log('User props', this.props.user)

        return (

            <div className="app">
                <Header />
                <div className="view">
                    <Route exact path={routes.HOME} render={() => <HomePage {...this.props} />} />
                    <Route exact path={routes.SIGN_UP} render={() => <SignUpPage {...this.props} />} />
                    <Route exact path={routes.SIGN_IN} render={() => <SignInPage {...this.props} />} />
                    {/* <Route exact path={routes.PASSWORD_FORGET} render={() => <PasswordForgetPage />} /> */}
                    <Route exact path={routes.ADD_VEHICLE} render={() => <AddVehiclePage {...this.props} />} />
                    <PrivateRoute exact path={routes.ADD_EVENT} component={AddEventPage} authed={this.props.user.authenticated} loading={this.props.user.loading} />
                    <Route exact path={routes.ACCOUNT} render={() => <AccountPage {...this.props} />} />
                    <Route exact path={routes.STATISTIC} render={() => <StatisticPage {...this.props} />} />
                    <Route exact path={routes.VEHICLE} render={() => <VehicleDetails {...this.props} />} />
                    {/* <Route exact path={routes.VEHICLE} render={VehicleDetails} /> */}
                </div>
                <Footer />
            </div>

        )
    }

}

export default Main
