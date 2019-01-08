import React, { Component } from 'react'

class QuickFuelConsumption extends Component {

    render() {
        const events = this.props.events.eventsArray
        let averageFuelConsumption = '–'

        let refuelEvents = events.filter(events => events.type === 'refuel')
        if (refuelEvents.length) {
            refuelEvents.sort((a, b) => a.mileage - b.mileage)
            const fuelDistance = refuelEvents[refuelEvents.length - 1].mileage - refuelEvents[0].mileage
            const fuelTotal = refuelEvents.reduce((consumption, event) => consumption + event.amount, 0)
            const fuelConsumed = fuelTotal - refuelEvents[0].amount // Substract amount from first event, because it must not be included to calculate the consumption correctly
            const fuelConsumption = (fuelConsumed / fuelDistance) * 100
            averageFuelConsumption = Number(fuelConsumption.toFixed(2))
        }

        return (

            <div className="quick-statistic">
                <div className="quick-statistic__label">Average fuel consumption</div>
                <div className="quick-statistic__amount">
                    <span className="quick-statistic__number">{averageFuelConsumption}</span>
                    <span className="quick-statistic__unit">l/100km</span>
                </div>
            </div>

        )

    }
}

export default QuickFuelConsumption
