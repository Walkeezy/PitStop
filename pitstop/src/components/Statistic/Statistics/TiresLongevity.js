import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import * as routes from '../../../constants/routes'
import * as colors from '../../../constants/colors'

import Header from '../../Layout/Header'

class TiresLongevity extends Component {

    render() {
        const events = this.props.events.eventsArray
        const initialMileage = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].initial_mileage
        let tiresDistances = []

        let tiresEvents = events.filter(events => events.type === 'tires-change')
        tiresEvents.sort((a, b) => a.mileage - b.mileage)
        tiresEvents.forEach(function (event, index) {
            // Calculate distance from one tire change to the other, if it's the first tire change, calculate distance from vehicles initial mileage
            const distance = (index > 0) ? event.mileage - tiresEvents[index - 1].mileage : event.mileage - initialMileage
            const object = { tires: event.tires, distance: distance }
            tiresDistances.push(object)
        })
        tiresDistances.sort((a, b) => b.distance - a.distance)

        const data = {
        labels: tiresDistances.map((tires) => tires.tires),
        datasets: [
            {
                label: 'Kilometers driven',
                backgroundColor     : colors.TIRE_CHANGE_TRANS,
                borderColor         : colors.TIRE_CHANGE,
                borderWidth         : 1,
                hoverBackgroundColor: colors.TIRE_CHANGE,
                hoverBorderColor    : colors.TIRE_CHANGE,
                data: tiresDistances.map((tires) => tires.distance)
            }
        ]
        }

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero : true
                    }
                }]
            }
        }

        return (

            <div className="page">
                <Header title="Tires longevity" backLink={routes.STATISTIC} />
                <div className="box">
                    <Bar data={data} options={options} />
                </div>
            </div>

        )
    }
}

export default TiresLongevity
