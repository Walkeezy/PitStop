import React, { Component } from 'react'

class QuickOilConsumption extends Component {

    calculateStatistic = () => {
        const events = this.props.events.events
        const vehicles = this.props.vehicles.vehicles

        if (vehicles.length === 0) {
            return false
        }

        let oilrefillEvents = events.filter(events => events.type === 'oil-refill')

        if (oilrefillEvents.length === 0) {
            return false
        }

        oilrefillEvents.sort((a, b) => a.mileage - b.mileage)
        const lowestMileage = (oilrefillEvents > 0) ? oilrefillEvents[0].mileage : vehicles[this.props.vehicles.activeVehicle].initial_mileage
        const oilDistance = oilrefillEvents[oilrefillEvents.length - 1].mileage - lowestMileage
        const oilTotal = oilrefillEvents.reduce((consumption, event) => consumption + event.amount, 0)
        const oilConsumed = oilTotal - oilrefillEvents[0].amount // Substract amount from first event, because it must not be included to calculate the consumption correctly
        const oilConsumption = ((oilConsumed / 10) / oilDistance) * 1000

        return Number(oilConsumption.toFixed(2))
    }

    render() {
        const statisticData = this.calculateStatistic()

        if (statisticData === false) {

            return (

                <div className="quick-statistic">
                    <div className="quick-statistic__label">Average oil consumption</div>
                    <div className="quick-statistic__empty-state">Not enough data</div>
                </div>

            )

        } else {

            return (

                <div className="quick-statistic">
                    <div className="quick-statistic__label">Average oil consumption</div>
                    <div className="quick-statistic__amount">
                        <span className="quick-statistic__number">{statisticData}</span>
                        <span className="quick-statistic__unit">l / 1000km</span>
                    </div>
                </div>

            )

        }

    }
}

export default QuickOilConsumption
