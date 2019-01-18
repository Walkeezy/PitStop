import React, { Component } from 'react'

class QuickFuelConsumption extends Component {

    calculateStatistic = () => {
        const events = this.props.events.events
        const vehicles = this.props.vehicles.vehicles

        if(vehicles.length === 0) {
            return false
        }

        let refuelEvents = events.filter(events => events.type === 'refuel')

        if(refuelEvents.length === 0) {
            return false
        }

        refuelEvents.sort((a, b) => a.mileage - b.mileage)
        const lowestMileage = (refuelEvents > 0) ? refuelEvents[0].mileage : vehicles[this.props.vehicles.activeVehicle].initial_mileage
        const fuelDistance = refuelEvents[refuelEvents.length - 1].mileage - lowestMileage
        const fuelTotal = refuelEvents.reduce((consumption, event) => consumption + event.amount, 0)
        const fuelConsumed = fuelTotal - refuelEvents[0].amount // Substract amount from first event, because it must not be included to calculate the consumption correctly
        const fuelConsumption = (fuelConsumed / fuelDistance) * 100

        return Number(fuelConsumption.toFixed(2))
    }

    render() {
        const statisticData = this.calculateStatistic()

        if (statisticData === false) {

            return (

                <div className="quick-statistic">
                    <div className="quick-statistic__label">Average fuel consumption</div>
                    <div className="quick-statistic__empty-state">Not enough data</div>
                </div>

            )

        } else {

            return (

                <div className="quick-statistic">
                    <div className="quick-statistic__label">Average fuel consumption</div>
                    <div className="quick-statistic__amount">
                        <span className="quick-statistic__number">{statisticData}</span>
                        <span className="quick-statistic__unit">l / 100km</span>
                    </div>
                </div>

            )

        }
    }
}

export default QuickFuelConsumption
