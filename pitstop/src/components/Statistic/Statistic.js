import React, { Component } from 'react'

import Header from '../Layout/Header'

class StatisticPage extends Component {
    render() {
        return (

            <div className="page">
                <Header title={'Statistics for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name} />
                <div className="content-box">
                    <p>Hier kommt dann so die Statistik hin.</p>
                </div>
            </div>

        )
    }
}

export default StatisticPage
