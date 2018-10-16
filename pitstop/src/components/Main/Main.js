import React, { Component } from 'react'
import { Route } from 'react-router-dom'

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
// import PrivateRoute from '../PrivateRoute'

class Main extends Component {

    componentDidMount() {

        this.props.verifyUser()

        // this.props.startLoadingPost().then(() => {
        //     this.setState({ loading: false })
        // })
        // this.props.startLoadingComments()
    }

    render() {

        return (

            <div className="app">
                <Header />
                <div className="view">
                    {/* <PrivateRoute exact path={routes.HOME} component={() => <HomePage />} authenticated={this.state.authenticated} /> */}
                    <Route exact path={routes.HOME} component={() => <HomePage {...this.props} />} />
                    <Route exact path={routes.SIGN_UP} component={() => <SignUpPage {...this.props} />} />
                    <Route exact path={routes.SIGN_IN} component={() => <SignInPage {...this.props} />} />
                    {/* <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} /> */}
                    <Route exact path={routes.ADD_VEHICLE} component={() => <AddVehiclePage {...this.props} />} />
                    <Route exact path={routes.ADD_EVENT} component={() => <AddEventPage {...this.props} />} />
                    <Route exact path={routes.ACCOUNT} component={() => <AccountPage {...this.props} />} />
                    <Route exact path={routes.STATISTIC} component={() => <StatisticPage {...this.props} />} />
                    {/* This does not work and I dont know why:
                    <Route exact path={routes.VEHICLE} component={() => <VehicleDetails {...this.props} />} /> */}
                    <Route exact path={routes.VEHICLE} component={VehicleDetails} />
                </div>
                <Footer />
            </div>

        )
    }

}

export default Main
