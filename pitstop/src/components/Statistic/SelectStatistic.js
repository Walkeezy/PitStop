import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Icon from './../Layout/Icons'

import Header from './../Layout/Header'

class StatisticPage extends Component {

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'View statistics for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'View statistics'
        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.HOME} />
                <div className="content">
                    <p><Link to={routes.STATISTIC + "/fuel"}>View fuel statistic</Link></p>
                    <p><Link to={routes.STATISTIC + "/oil-consumption"}>View oil consumption</Link></p>
                </div>
            </div>

        )
    }
}

export default StatisticPage
