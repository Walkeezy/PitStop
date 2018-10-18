import React, {Component} from 'react'
import {history} from '../../history';
import * as routes from '../../constants/routes';

class AddVehiclePage extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state ={
            vehicle : {
                name        : null,
                make_model  : null,
                registration: null,
                mileage     : null,
                tyres       : null
            }
        }
    }

    componentWillMount(){
        this.props.vehicles.vehicles.map((vehicle) => {
            if (vehicle.id === this.props.vehicles.toEdit ){
                this.setState({
                    vehicle: vehicle
                })
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('this.state', this.state);
        const vehicleName = event.target.elements.vehicleName.value
        const vehicle = {
            id: this.state.vehicle.id || Number(new Date()),
            name: vehicleName,
            make_model: event.target.elements.vehicleMakeModel.value,
            registration: event.target.elements.vehicleFirstRegistration.value,
            mileage: event.target.elements.vehicleMileage.value,
            tyres: event.target.elements.vehicleTyres.value
        }

        if (vehicleName) {
            this.props.startAddingVehicle(vehicle)
            history.push(routes.ACCOUNT)
        }
    }

    render() {
        return (

            <div className="add-vehicle-form">

                <h1>Add new vehicle</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form__field">
                        <label htmlFor="vehicleName">Vehicle name</label>
                        <input type="text" name="vehicleName" id="vehicleName" defaultValue={this.state.vehicle.name}/>
                    </div>
                    <div className="form__field">
                        <label htmlFor="vehicleMakeModel">Make &amp; model</label>
                        <input type="text" name="vehicleMakeModel" id="vehicleMakeModel" defaultValue={this.state.vehicle.make_model}/>
                    </div>
                    <div className="form__field field--half">
                        <label htmlFor="vehicleFirstRegistration">Date of first registration</label>
                        <input type="date" name="vehicleFirstRegistration" id="vehicleFirstRegistration" defaultValue={this.state.vehicle.registration}/>
                    </div>
                    <div className="form__field field--half">
                        <label htmlFor="vehicleMileage">Current mileage</label>
                        <input type="number" min="0" name="vehicleMileage" id="vehicleMileage" defaultValue={this.state.vehicle.mileage}/>
                    </div>
                    <div className="form__field">
                        <label htmlFor="vehicleTyres">Tyres</label>
                        <input type="text" name="vehicleTyres" id="vehicleTyres" defaultValue={this.state.vehicle.tyres}/>
                    </div>
                    <div className="form__field field--submit">
                        <button type="submit" className="button--yellow">Save vehicle</button>
                    </div>
                </form>

            </div>

        )
    }
}

export default AddVehiclePage
