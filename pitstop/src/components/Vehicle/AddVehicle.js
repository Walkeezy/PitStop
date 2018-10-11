import React, {Component} from 'react'

class AddVehiclePage extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const vehicleName = event.target.elements.vehicleName.value
        const vehicleMakeModel = event.target.elements.vehicleMakeModel.value
        const vehicleFirstRegistration = event.target.elements.vehicleFirstRegistration.value
        const vehicleMileage = event.target.elements.vehicleMileage.value
        const vehicleTyres = event.target.elements.vehicleTyres.value
        const vehicle = {
            id: Number(new Date()),
            name: vehicleName,
            make_model: vehicleMakeModel,
            registration: vehicleFirstRegistration,
            mileage: vehicleMileage,
            tyres: vehicleTyres
        }
        if (vehicleName) {
            this.props.startAddingVehicle(vehicle)
        }
    }

    render() {
        return (

            <div className="add-vehicle-form">

                <h1>Add vehicle</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form__field">
                        <label htmlFor="vehicleName">Vehicle name</label>
                        <input type="text" name="vehicleName" id="vehicleName" />
                    </div>
                    <div className="form__field">
                        <label htmlFor="vehicleMakeModel">Make &amp; model</label>
                        <input type="text" name="vehicleMakeModel" id="vehicleMakeModel" />
                    </div>
                    <div className="form__field">
                        <label htmlFor="vehicleFirstRegistration">Date of first registration</label>
                        <input type="date" name="vehicleFirstRegistration" id="vehicleFirstRegistration" />
                    </div>
                    <div className="form__field">
                        <label htmlFor="vehicleMileage">Current mileage</label>
                        <input type="number" step="1000" name="vehicleMileage" id="vehicleMileage" />
                    </div>
                    <div className="form__field">
                        <label htmlFor="vehicleTyres">Tyres</label>
                        <input type="text" name="vehicleTyres" id="vehicleTyres" />
                    </div>
                    <div className="form__field field--submit">
                        <input type="submit" value="Add vehicle" />
                    </div>
                </form>

            </div>

        )
    }
}

export default AddVehiclePage
