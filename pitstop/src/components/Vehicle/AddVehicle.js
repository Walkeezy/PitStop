import React, {Component} from 'react'
import AddVehicleForm from './AddVehicleForm'

class AddVehiclePage extends Component {

    render() {
        return (

            <div className="add-vehicle-form">
                <h1>{this.props.vehicles.toEdit ? 'Edit vehicle' : 'Add new vehicle' }</h1>
                <AddVehicleForm {...this.props} />
            </div>

        )
    }
}

export default AddVehiclePage
