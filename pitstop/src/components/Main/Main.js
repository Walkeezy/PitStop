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
import EditVehiclePage from '../Vehicle/EditVehicle'
import AddEventPage from '../Event/AddEvent'
import EventTypePage from '../Event/EventType'
import AccountPage from '../User/AccountPage'
import StatisticPage from '../Statistic/Statistic'

import * as routes from '../../constants/routes'

class Main extends Component {

    componentDidMount() {
        this.props.verifyUser()
    }

    render() {
        const loadingUserData = this.props.user.loading
        const loadingVehicleData = this.props.vehicles.loading
        const loadingEventData = this.props.events.loading

        // Display loading screen until all data is loaded
        if (loadingUserData || loadingVehicleData || loadingEventData){
            return (

                <div className="loading-screen">
                    <Header/>
                    <div className="bouncing-loader">
                        <div className="bouncing-loader__dot"></div>
                        <div className="bouncing-loader__dot"></div>
                        <div className="bouncing-loader__dot"></div>
                    </div>
                </div>

            )
        } else {
            return (

                <div className="app">
                    <PrivateRoute exact path={routes.HOME} component={HomePage} {...this.props} />
                    <Route exact path={routes.SIGN_UP} render={() => <SignUpPage {...this.props} />} />
                    <Route exact path={routes.SIGN_IN} render={() => <SignInPage {...this.props} />} />
                    <Route exact path={routes.PASSWORD_FORGET} render={() => <PasswordForgetPage {...this.props} />} />
                    <PrivateRoute exact path={routes.ADD_VEHICLE} component={AddVehiclePage} {...this.props} />
                    <PrivateRoute exact path={routes.EVENT_TYPE} component={EventTypePage} {...this.props} />
                    <PrivateRoute exact path='/edit-vehicle/:id' component={EditVehiclePage} {...this.props} />
                    <PrivateRoute exact path='/add-event/:type' component={AddEventPage} {...this.props} />
                    <PrivateRoute exact path={routes.ACCOUNT} component={AccountPage} {...this.props} />
                    <PrivateRoute exact path={routes.STATISTIC} component={StatisticPage} {...this.props} />
                    <Footer {...this.props} />
                </div>

            )
        }
    }

}

export default Main
