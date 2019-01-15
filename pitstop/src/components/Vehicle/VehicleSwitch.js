import React, { Component } from 'react'

class VehicleSwitch extends Component {

    constructor() {
        super()
        this.state = {
            activeVehicle: ''
        }
        this.handleChangeVehicle = this.handleChangeVehicle.bind(this)
    }

    handleChangeVehicle(event) {
        const vehicleId = event.target.value
        if (vehicleId) {
            this.props.saveVehicleAsActive(vehicleId)
            this.setState({
                activeVehicle: vehicleId
            })
        }
    }

    componentDidMount() {
        if (this.props.vehicles.activeVehicle){
            this.setState({
                activeVehicle: this.props.vehicles.activeVehicle
            })
        }
    }

    render() {
        const vehicles = this.props.vehicles.vehicles
        if (vehicles){
            return (
            
                <div className="vehicle-switch">
                    <label htmlFor="select-vehicle">Active vehicle</label>
                    <select onChange={this.handleChangeVehicle} value={this.state.activeVehicle} className="select-vehicle" id="select-vehicle">
                        {Object.keys(vehicles).map((key, index) => {
                            return (
                                <option key={index} value={key}>{vehicles[key].name}</option>
                            )
                        })}
                    </select>
                </div>

            )
        } else {
            return (

                <div>No vehicles found.</div>

            )
        }
    }
}

export default VehicleSwitch
