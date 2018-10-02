import React, { Component } from 'react'

class VehicleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { activeVehicle: 'krasser BMW' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ activeVehicle: event.target.value })
    console.log(event.target.value)
  }

  render() {
    const { vehicles } = this.props

    return (

      <div>
        <p>Aktives Fahrzeug: {this.state.activeVehicle}</p>
        <select value={this.state.activeVehicle} onChange={this.handleChange}>
          {Object.keys(vehicles).map(key => <option key={key} value={vehicles[key].vehicleName}>{vehicles[key].vehicleName}</option>)}
        </select>
      </div>

    )
  }

}

export default VehicleSwitch