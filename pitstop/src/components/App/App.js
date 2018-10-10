import React, { Component } from 'react'
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'

import { auth } from '../../database/config'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import SignUpPage from '../User/SignUp'
import SignInPage from '../User/SignIn'
// import PasswordForgetPage from '../User/PasswordForget'
import HomePage from '../Home/Home'
import AccountPage from '../User/AccountPage'
import AddVehiclePage from '../Vehicle/AddVehicle'
import AddEventPage from '../Vehicle/AddEvent'
import StatisticPage from '../Vehicle/VehicleStatistic'
import * as routes from '../../constants/routes'

import './App.css'

class App extends Component {
    state = {
        loading: true,
        authenticated: false,
        user: null
    }

    componentWillMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log(user);
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false
                });
            }
        });
    }

    render() {
        const { authenticated, loading } = this.state

        if (loading) {
            return <p>Loading..</p>
        }

        return (

            <Router>
                <div className="app">
                    <Header />
                    <div className="view">
                        <PrivateRoute exact path={routes.HOME} component={() => <HomePage />} authenticated={this.state.authenticated} />
                        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
                        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
                        {/* <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} /> */}
                        <Route exact path={routes.ADD_VEHICLE} component={() => <AddVehiclePage />} />
                        <Route exact path={routes.ADD_EVENT} component={() => <AddEventPage />} />
                        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
                        <Route exact path={routes.STATISTIC} component={() => <StatisticPage />} />
                    </div>
                    <Footer />
                </div>
            </Router>

        )
    }

}

export default App
