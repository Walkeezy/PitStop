import React, { Component } from 'react'

class QuickOilConsumption extends Component {

    render() {
        const events = this.props.events.events
        const initialMileage = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].initial_mileage
        let averageOilConsumption = '–'

        let oilrefillEvents = events.filter(events => events.type === 'oil-refill')
        if (oilrefillEvents.length) {
            oilrefillEvents.sort((a, b) => a.mileage - b.mileage)
            const lowestMileage = (oilrefillEvents > 0) ? oilrefillEvents[0].mileage : initialMileage
            const oilDistance = oilrefillEvents[oilrefillEvents.length - 1].mileage - lowestMileage
            const oilTotal = oilrefillEvents.reduce((consumption, event) => consumption + event.amount, 0)
            const oilConsumed = oilTotal - oilrefillEvents[0].amount // Substract amount from first event, because it must not be included to calculate the consumption correctly
            const oilConsumption = ((oilConsumed / 10) / oilDistance) * 1000
            averageOilConsumption = Number(oilConsumption.toFixed(2))
        }

        return (

            <div className="quick-statistic">
                <div className="quick-statistic__label">Average oil consumption</div>
                <div className="quick-statistic__amount">
                    <span className="quick-statistic__number">{averageOilConsumption}</span>
                    <span className="quick-statistic__unit">l / 1000km</span>
                </div>
            </div>

        )

    }
}

export default QuickOilConsumption
