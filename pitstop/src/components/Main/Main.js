import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import HomePage from '../Home/Home'
import SignUpPage from '../User/SignUp'
import SignInPage from '../User/SignIn'
import PasswordForgetPage from '../User/PasswordForget'
import PasswordChangePage from '../User/PasswordChange'
import AddVehiclePage from '../Vehicle/AddVehicle'
import EditVehiclePage from '../Vehicle/EditVehicle'
import AddEventPage from '../Event/AddEvent'
import EditEventPage from '../Event/EditEvent'
import EventTypePage from '../Event/SelectEventType'
import AccountPage from '../User/AccountPage'
import SelectStatisticPage from '../Statistic/SelectStatistic'
import ViewStatisticPage from '../Statistic/ViewStatistic'
import NotFoundPage from './NotFound'

import * as routes from '../../constants/routes'

class Main extends Component {

    componentDidMount() {
        this.props.verifyUser()
    }

    render() {
        const loadingUserData = this.props.user.loading
        const loadingVehicleData = this.props.vehicles.loading

        // Display loading screen until all data is loaded
        if (loadingUserData || loadingVehicleData){
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
                    <Switch>
                        <PrivateRoute exact path={routes.HOME} component={HomePage} {...this.props} />
                        <PublicRoute exact path={routes.SIGN_UP} component={SignUpPage} {...this.props} />
                        <PublicRoute exact path={routes.SIGN_IN} component={SignInPage} {...this.props} />
                        <Route exact path={routes.PASSWORD_FORGET} render={() => <PasswordForgetPage {...this.props} />} />
                        <PrivateRoute exact path={routes.PASSWORD_CHANGE} component={PasswordChangePage} {...this.props} />
                        <PrivateRoute exact path={routes.ADD_VEHICLE} component={AddVehiclePage} {...this.props} />
                        <PrivateRoute exact path={routes.ADD_EVENT} component={EventTypePage} {...this.props} />
                        <PrivateRoute exact path={routes.EDIT_VEHICLE + '/:id'} component={EditVehiclePage} {...this.props} />
                        <PrivateRoute exact path={routes.ADD_EVENT + '/:type'} component={AddEventPage} {...this.props} />
                        <PrivateRoute exact path={routes.EDIT_EVENT + '/:type/:id'} component={EditEventPage} {...this.props} />
                        <PrivateRoute exact path={routes.ACCOUNT} component={AccountPage} {...this.props} />
                        <PrivateRoute exact path={routes.STATISTIC} component={SelectStatisticPage} {...this.props} />
                        <PrivateRoute exact path={routes.STATISTIC + '/:type'} component={ViewStatisticPage} {...this.props} />
                        <Route path='*' render={() => <NotFoundPage />} />
                    </Switch>
                    {this.props.user.loading === true || this.props.user.authenticated === true ? <Footer {...this.props} /> : null}
                </div>

            )
        }
    }

}

export default Main
