import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as routes from '../../constants/routes'
import Header from './../Layout/Header'
import Icon from '../Layout/Icons'
import QuickFuelConsumption from './QuickStatistics/FuelConsumption'
import QuickOilConsumption from './QuickStatistics/OilConsumption'

class StatisticPage extends Component {

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'Statistics for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'Statistics'
        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.HOME}/>
                <div className="box">
                    <div className="box__header">
                        <h2>Quick statistics</h2>
                    </div>
                    <div className="box__content">
                        <div className="quick-statistics">
                            <QuickFuelConsumption {...this.props} />
                            <QuickOilConsumption {...this.props} />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box__header">
                        <h2>Advanced statistics</h2>
                    </div>
                    <ul className="list list--links">
                        <li className="list-item">
                            <Link className="list-item__link" to={routes.STATISTIC + "/fuel"}>Fuel statistic<Icon name="forward" width="18" fill="#233142" /></Link>
                        </li>
                        <li className="list-item">
                            <Link className="list-item__link" to={routes.STATISTIC + "/oil-consumption"}>Oil consumption<Icon name="forward" width="18" fill="#233142" /></Link>
                        </li>
                        <li className="list-item">
                            <Link className="list-item__link" to={routes.STATISTIC + "/tires-longevity"}>Tire longevity<Icon name="forward" width="18" fill="#233142" /></Link>
                        </li>
                        <li className="list-item">
                            <Link className="list-item__link" to={routes.STATISTIC + "/maintenance-costs"}>Maintenance costs<Icon name="forward" width="18" fill="#233142" /></Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default StatisticPage
