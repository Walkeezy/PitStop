import React, { Component } from 'react'

class VehicleDetails extends Component {

    render() {
        const vehicleId = this.props.match.params.id
        console.log(this.props)
        return (

            <div className="vehicle-list">
                <h2>Edit vehicle {vehicleId}</h2>
            </div>

        )
    }
}

export default VehicleDetails