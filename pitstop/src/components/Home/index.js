import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import withAuthorization from '../Session/withAuthorization';
import {db, firebase} from '../../firebase';
import VehicleSwitch from './VehicleSwitch';
import LogBook from '../LogBook/LogBook';

// Fake data
const entries = [{
    id: '0',
    type: 'fuel',
    amount: '50',
    cost: '100',
    mileage: '23498'
  }, {
    id: '1',
    type: 'service',
    cost: '320',
    mileage: '25000'
  }, {
    id: '2',
    type: 'fuel',
    amount: '34',
    cost: '78',
    mileage: '25453'
  }]

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

                {!!vehicles && <VehicleSwitch vehicles={vehicles}/>}

                <LogBook entries={entries}/>

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