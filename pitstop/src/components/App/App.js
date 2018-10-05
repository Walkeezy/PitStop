import React from 'react'
import { BrowserRouter as Router, Route,} from 'react-router-dom'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import SignUpPage from '../User/SignUp'
import SignInPage from '../User/SignIn'
import PasswordForgetPage from '../User/PasswordForget'
import HomePage from '../Home/Home'
import AccountPage from '../User/AccountPage'
import AddVehiclePage from '../Vehicle/AddVehicle'
import AddEventPage from '../Vehicle/AddEvent'
import StatisticPage from '../Vehicle/VehicleStatistic'
import withAuthentication from '../Session/withAuthentication'
import * as routes from '../../constants/routes'

import './App.css'

const App = () =>
    <Router>
        <div className="app">
        <Header />
        <div className="view">
            <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
            <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
            <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route exact path={routes.ADD_VEHICLE} component={() => <AddVehiclePage />} />
            <Route exact path={routes.ADD_EVENT} component={() => <AddEventPage />} />
            <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
            <Route exact path={routes.STATISTIC} component={() => <StatisticPage />} />
        </div>
        <Footer />
        </div>
    </Router>

export default withAuthentication(App);
