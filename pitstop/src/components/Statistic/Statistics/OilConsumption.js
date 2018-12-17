import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import * as routes from '../../../constants/routes'
import moment from 'moment'

import Header from './../../Layout/Header'

class OilConsumption extends Component {

    render() {
        const events = this.props.events.eventsArray

        console.log('all events', events)

        // Filter events for oil refill events
        let eventsFiltered = events.filter(events => events.type === 'oil-refill')

        console.log('filtered', eventsFiltered)

        // Sort by date and mileage
        let eventsSorted = eventsFiltered.sort((a, b) => a.date.seconds - b.date.seconds || a.mileage - b.mileage)

        console.log('sorted', eventsSorted)

        let months = eventsSorted.map((eventsSorted) => moment(eventsSorted.date.seconds, 'X').format('D.M.YYYY'))
        let amount = eventsSorted.map((eventsSorted) => eventsSorted.amount)

        console.log('months', months)
        console.log('amount', amount)

        const data = {
            labels: months,
            datasets: [
                {
                    label: 'Oil in deciliters',
                    backgroundColor: 'rgba(77, 157, 224, 0.5)',
                    borderColor: 'rgba(77, 157, 224, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    lineTension: 0,
                    data: amount
                }
            ]
        };

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: 0
                    }
                }]
            }
        };

        return (

            <div className="page">
                <Header title="Oil consumption" backLink={routes.STATISTIC} />
                <div className="content-box">
                    <Line data={data} options={options} />
                </div>
            </div>

        )
    }
}

export default OilConsumption
