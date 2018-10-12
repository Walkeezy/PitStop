import React, { Component } from 'react'

class VehicleSwitch extends Component {

    componentDidMount() {
        // this.props.startLoadingVehicles()
        console.log(this.props.vehicles)
    }

    render() {
        return (

            <select onChange={this.handleChange}>
                {/* {Object.keys(this.props.vehicles).map(key => <option key={key} value={this.props.vehicles[key].name}>{this.props.vehicles[key].name}</option>)} */}
            </select>

        )
    }
}

export default VehicleSwitch
