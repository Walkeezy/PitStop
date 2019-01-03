import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import Icon from '../Layout/Icons'

class StatisticPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loadingQuickStatistics: true,
            averageOilConsumption: '',
            averageFuelConsumption: ''
        }
    }

    componentDidMount() {
        const events = this.props.events.eventsArray

        // Calculate fuel consumption
        let refuelEvents = events.filter(events => events.type === 'refuel')
        if (refuelEvents.length) {
            refuelEvents.sort((a, b) => a.mileage - b.mileage)
            const fuelDistance = refuelEvents[refuelEvents.length - 1].mileage - refuelEvents[0].mileage
            const fuelTotal = refuelEvents.reduce((consumption, event) => consumption + event.amount, 0)
            const fuelConsumed = fuelTotal - refuelEvents[0].amount // Substract amount from first event, because it must not be included to calculate the consumption correctly
            const fuelConsumption = (fuelConsumed / fuelDistance) * 100
            this.setState({
                averageFuelConsumption: Number(fuelConsumption.toFixed(2))
            })
        } else {
            this.setState({
                averageFuelConsumption: '-'
            })
        }

        // Calculate oil consumption
        let oilrefillEvents = events.filter(events => events.type === 'oil-refill')
        if(oilrefillEvents.length) {
            oilrefillEvents.sort((a, b) => a.mileage - b.mileage)
            const oilDistance = oilrefillEvents[oilrefillEvents.length - 1].mileage - oilrefillEvents[0].mileage
            const oilTotal = oilrefillEvents.reduce((consumption, event) => consumption + event.amount, 0)
            const oilConsumed = oilTotal - oilrefillEvents[0].amount // Substract amount from first event, because it must not be included to calculate the consumption correctly
            const oilConsumption = ((oilConsumed / 10) / oilDistance) * 1000
            this.setState({
                averageOilConsumption: Number(oilConsumption.toFixed(2))
            })
        } else {
            this.setState({
                averageOilConsumption: '-'
            })
        }

    }

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'Statistics for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'Statistics'
        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.HOME}/>
                <div className="content-box">
                    <h2>Quick statistics</h2>
                    <div className="quick-statistics">
                        <div className="quick-statistic">
                            <div className="quick-statistic__label">Average fuel consumption</div>
                            <div className="quick-statistic__amount">
                                <span className="quick-statistic__number">{this.state.averageFuelConsumption}</span>
                                <span className="quick-statistic__unit">l/100km</span>
                            </div>
                        </div>
                        <div className="quick-statistic">
                            <div className="quick-statistic__label">Average oil consumption</div>
                            <div className="quick-statistic__amount">
                                <span className="quick-statistic__number">{this.state.averageOilConsumption}</span>
                                <span className="quick-statistic__unit">l/1000km</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-box">
                    <h2>Advanced statistics</h2>
                    <div className="select-event">
                        <div className="select-event__item">
                            <Link to={routes.STATISTIC + "/fuel"}>
                                <div className="event__icon icon icon--refuel"><Icon name="fuel"/></div>
                                <span className="event__label">View fuel statistic</span>
                            </Link>
                        </div>
                        <div className="select-event__item">
                            <Link to={routes.STATISTIC + "/oil-consumption"}>
                                <div className="event__icon icon icon--oil-refill"><Icon name="oil"/></div>
                                <span className="event__label">View oil consumption</span>
                            </Link>
                        </div>
                        <div className="select-event__item">
                            <Link to={routes.STATISTIC + "/maintenance-costs"}>
                                <div className="event__icon icon icon--inspection-service"><Icon name="breakdown"/>
                                </div>
                                <span className="event__label">View maintenance costs</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default StatisticPage
