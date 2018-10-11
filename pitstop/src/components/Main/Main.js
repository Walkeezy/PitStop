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

import * as routes from '../../constants/routes'
// import PrivateRoute from '../PrivateRoute'

import { auth } from '../../database/config'

class Main extends Component {

    componentWillMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log('This is the user: ', user)
                this.setState({
                    authenticated: true,
                    currentUser: user
                })
            } else {
                console.log('There is no logged in user')
                this.setState({
                    authenticated: false,
                    currentUser: null
                })
            }
        })
    }

    componentDidMount() {

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
                </div>
                <Footer />
            </div>

        )
    }

}

export default Main
