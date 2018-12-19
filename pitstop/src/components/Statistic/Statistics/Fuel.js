import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import * as routes from '../../../constants/routes'
import * as colors from '../../../constants/colors'

import Header from './../../Layout/Header'

class FuelStatistic extends Component {

    render() {

        const events = this.props.events.eventsArray

        // Filter events for oil refill events
        let eventsFiltered = events.filter(events => events.type === 'refuel'),
            // Sort by date and mileage
            eventsSorted   = eventsFiltered.sort((a, b) => a.date.seconds - b.date.seconds || a.mileage - b.mileage),
            // Chart Arrays
            amount         = eventsSorted.map((eventsSorted) => eventsSorted.amount),
            price          = eventsSorted.map((eventsSorted) => eventsSorted.price),
            mileage        = eventsSorted.map((eventsSorted) => eventsSorted.price)

        const data = {
            labels  : mileage,
            datasets: [
                {
                    label               : 'liter',
                    backgroundColor     : colors.COLOR_REFUEL_TRANS,
                    borderColor         : colors.COLOR_REFUEL,
                    borderCapStyle      : 'butt',
                    borderWidth         : 1,
                    hoverBackgroundColor: colors.COLOR_REFUEL,
                    hoverBorderColor    : colors.COLOR_REFUEL,
                    lineTension         : 0,
                    data                : amount
                },
                {
                    label               : 'price',
                    backgroundColor     : colors.COLOR_PRICE_TRANS,
                    borderColor         : colors.COLOR_PRICE,
                    borderCapStyle      : 'butt',
                    borderWidth         : 1,
                    hoverBackgroundColor: colors.COLOR_PRICE,
                    hoverBorderColor    : colors.COLOR_PRICE,
                    lineTension         : 0,
                    data                : price
                }
            ]
        }

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }]
            }
        }

        return (

            <div className="page">
                <Header title="Fuel consumption" backLink={routes.STATISTIC}/>
                <div className="content-box">
                    <Line data={data} options={options}/>
                </div>
            </div>

        )
    }
}

export default FuelStatistic
