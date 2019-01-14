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
            months         = eventsSorted.map((eventsSorted) => moment(eventsSorted.date.seconds, 'X').format('D.M.YYYY')),
            fuelConsumption = []

            eventsSorted.map((props, index) => {
                    fuelConsumption.push(
                        index > 0 ? Number(((props.amount / (props.mileage - eventsSorted[index - 1].mileage)) * 100).toFixed(2)) : 0
                    )
            })

        const data = {
            labels  : months,
            datasets: [
                {
                    label               : 'Liter per 100km',
                    backgroundColor     : colors.REFUEL_TRANS,
                    borderColor         : colors.REFUEL,
                    borderCapStyle      : 'butt',
                    borderWidth         : 1,
                    hoverBackgroundColor: colors.REFUEL,
                    hoverBorderColor    : colors.REFUEL,
                    lineTension         : 0,
                    data                : fuelConsumption
                }
            ]
        }

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 20
                    }
                }]
            }
        }

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

export default FuelStatistic
