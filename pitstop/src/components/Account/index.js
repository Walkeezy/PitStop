import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import SignOutButton from '../SignOut';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = ({authUser}) =>
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm/>
                <PasswordChangeForm/>

                <div>
                  <Link to={routes.ADD_VEHICLE}>Add Vehicle</Link>
                </div>
                <div>
                  <SignOutButton />
                </div>
            </div>

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps)
)(AccountPage);