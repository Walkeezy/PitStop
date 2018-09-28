import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import withAuthorization from '../Session/withAuthorization';
import {db, firebase} from '../../firebase';
import VehicleSwitch from './VehicleSwitch';

class HomePage extends Component {
    componentDidMount() {
        const {onSetVehicles} = this.props;

        db.onceGetVehicles(firebase.auth.currentUser.uid)
            .then(snapshot =>
                onSetVehicles(snapshot.val())
            );
    }

    render() {
        const {vehicles} = this.props;

        return (
            <div>
                <h1>Home Page</h1>
                <p>The Home Page is accessible by every signed in user.</p>


                {!!vehicles && <VehicleSwitch vehicles={vehicles}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    vehicles: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
    onSetVehicles: (users) => dispatch({type: 'USERS_SET', users}),
});

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);