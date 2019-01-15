import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import * as routes from '../../../constants/routes'
import * as colors from '../../../constants/colors'

import Header from './../../Layout/Header'
import moment from 'moment'

class FuelStatistic extends Component {

    render() {

        const events = this.props.events.events

        let eventsFiltered = events.filter(events => events.type === 'refuel'),
            // Sort by date and mileage
            eventsSorted   = eventsFiltered.sort((a, b) => a.date.seconds - b.date.seconds),
            // Chart Arrays
            months = eventsSorted.map((eventsSorted) => moment(eventsSorted.date.seconds, 'X').format('D. MMMM YYYY')),
            fuelConsumption = eventsSorted.map((props, index) => {
                    return index > 0 ? Number(((props.amount / (props.mileage - eventsSorted[index - 1].mileage)) * 100).toFixed(2)) : 0
            })

        // Remove first entry, because first event is 0 anyways
        months.shift()
        fuelConsumption.shift()

        const data = {
            labels  : months,
            datasets: [
                {
                    label               : 'liter / 100km',
                    backgroundColor     : colors.REFUEL_TRANS,
                    borderColor         : colors.REFUEL,
                    borderCapStyle      : 'butt',
                    borderWidth         : 1,
                    hoverBackgroundColor: colors.REFUEL,
                    hoverBorderColor    : colors.REFUEL,
                    lineTension         : 0.3,
                    data                : fuelConsumption
                }
            ]
        }

        const options = {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month',
                        parser: 'D. MMMM YYYY'
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 20
                    }
                }]
            }
        }

        if (fuelConsumption.length === 0) {

            return (

                <div className="page">
                    <Header title="Fuel consumption" backLink={routes.STATISTIC} />
                    <div className="notification notification--standalone notification--empty-state">
                        <p>Oh no, there is not enough data to calculate this statistic for you.</p>
                    </div>
                </div>

            )

        } else {

            return (

                <div className="page">
                    <Header title="Fuel consumption" backLink={routes.STATISTIC}/>
                    <div className="box">
                        <div className="box__content">
                            <Line data={data} options={options} />
                        </div>
                    </div>
                </div>

            )

        }
    }
}

export default FuelStatistic
