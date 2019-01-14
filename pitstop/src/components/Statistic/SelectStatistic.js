import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <ul className="list link-list">
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.STATISTIC + "/fuel"}>
                                <div className="link-list-item__icon icon icon--refuel"><Icon name="fuel" /></div>
                                Fuel consumption
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.STATISTIC + "/oil-consumption"}>
                                <div className="link-list-item__icon icon icon--oil-refill"><Icon name="oil" /></div>
                                Oil consumption
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.STATISTIC + "/tires-longevity"}>
                                <div className="link-list-item__icon icon icon--tires-change"><Icon name="wheel" /></div>
                                Tire longevity
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                        <li className="link-list-item">
                            <Link className="link-list-item__link" to={routes.STATISTIC + "/maintenance-costs"}>
                                <div className="link-list-item__icon icon icon--inspection-service"><Icon name="breakdown" /></div>
                                Maintenance costs
                                <Icon className="link-list-item__arrow" name="forward" width="10" fill="#233142" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default StatisticPage
