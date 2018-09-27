import React, {Component} from 'react';
import {db, firebase} from '../../firebase';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import * as routes from '../../constants/routes';
import withAuthorization from '../Session/withAuthorization';

const AddVehiclePage = ({history}) =>
    <div>
        <h1>Add Vehicle</h1>
        <AddVehicleForm history={history}/>
    </div>

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    vehicleName: '',
    brand      : '',
    mark       : '',
    date       : '',
    mileage    : '',
    tyres      : '',
};

class AddVehicleForm extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
                  vehicleName,
                  brand,
                  mark,
                  date,
                  mileage,
                  tyres,
              } = this.state;

        const {
                  history,
              } = this.props;


        // Create a user in your own accessible Firebase Database too
        db.doCreateVehicle(
            firebase.auth.currentUser.uid,
            vehicleName,
            brand,
            mark,
            date,
            mileage,
            tyres
        ).then(() => {
            this.setState(() => ({...INITIAL_STATE}));
            history.push(routes.HOME);
        }).catch(error => {
            this.setState(updateByPropertyName('error', error));
        });

        event.preventDefault();
    };

    render() {
        const {
                  vehicleName,
                  brand,
                  mark,
                  date,
                  mileage,
                  tyres,
                  error,
              } = this.state;

        // const isInvalid =
        //           passwordOne !== passwordTwo ||
        //           passwordOne === '' ||
        //           username === '' ||
        //           email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={vehicleName}
                    onChange={event => this.setState(updateByPropertyName('vehicleName', event.target.value))}
                    type="text"
                    placeholder="Vehicle Name"
                />
                <input
                    value={brand}
                    onChange={event => this.setState(updateByPropertyName('brand', event.target.value))}
                    type="text"
                    placeholder="Brand"
                />
                <input
                    value={mark}
                    onChange={event => this.setState(updateByPropertyName('mark', event.target.value))}
                    type="text"
                    placeholder="Mark"
                />
                <input
                    value={date}
                    onChange={event => this.setState(updateByPropertyName('date', event.target.value))}
                    type="date"
                    placeholder="Date"
                />
                <input
                    value={mileage}
                    onChange={event => this.setState(updateByPropertyName('mileage', event.target.value))}
                    type="number"
                    step="1000"
                    placeholder="Mileage"
                />
                <input
                    value={tyres}
                    onChange={event => this.setState(updateByPropertyName('tyres', event.target.value))}
                    type="text"
                    placeholder="Tyres"
                />
                {/*<button disabled={isInvalid} type="submit">*/}
                <button type="submit">
                    Add Vehicle
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps)
)(AddVehiclePage);