import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import * as routes from '../../../constants/routes'
import * as colors from '../../../constants/colors'
import moment from 'moment'

import Header from './../../Layout/Header'

class OilConsumption extends Component {

    render() {
        const events = this.props.events.eventsArray

        // Filter events for oil refill events
        let eventsFiltered = events.filter(events => events.type === 'oil-refill'),

            // Sort by date and mileage
            eventsSorted   = eventsFiltered.sort((a, b) => a.date.seconds - b.date.seconds || a.mileage - b.mileage),
            // Chart Arrays
            months         = eventsSorted.map((eventsSorted) => moment(eventsSorted.date.seconds, 'X').format('D.M.YYYY')),
            amount         = eventsSorted.map((eventsSorted) => eventsSorted.amount),
            price         = eventsSorted.map((eventsSorted) => eventsSorted.price)

        console.log('eventsSorted', eventsSorted)

        const data = {
            labels  : months,
            datasets: [
                {
                    label               : 'Oil in deciliters',
                    backgroundColor     : colors.COLOR_OIL_REFILL_TRANS,
                    borderColor         : colors.COLOR_OIL_REFILL,
                    borderWidth         : 1,
                    hoverBackgroundColor: colors.COLOR_OIL_REFILL,
                    hoverBorderColor    : colors.COLOR_OIL_REFILL,
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
                        beginAtZero : true,
                        suggestedMin: 0,
                        suggestedMax: 50
                    }
                }]
            }
        }

        return (

            <div className="page">
                <Header title="Oil consumption" backLink={routes.STATISTIC}/>
                <div className="content-box">
                    <Line data={data} options={options}/>
                </div>
            </div>

        )
    }
}

export default OilConsumption
