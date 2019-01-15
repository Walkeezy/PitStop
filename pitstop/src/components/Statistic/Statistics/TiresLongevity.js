import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import * as routes from '../../../constants/routes'
import * as colors from '../../../constants/colors'

import Header from '../../Layout/Header'

class TiresLongevity extends Component {

    calculateStatistic = () => {
        const events = this.props.events.events
        const vehicle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
        let tiresDistances = []

        let tiresEvents = events.filter(events => events.type === 'tires-change')

        if(tiresEvents.length === 0){
            return false
        }

        tiresEvents.sort((a, b) => a.mileage - b.mileage)
        tiresEvents.forEach(function (event, index) {
            // Calculate distance from one tire change to the other, if it's the first tire change, calculate distance from vehicles initial mileage
            if(index > 0){
                const distance = event.mileage - tiresEvents[index-1].mileage
                const tire = { name: tiresEvents[index - 1].tires, distance: distance }
                tiresDistances.push(tire)
            }
        })

        // Add initial tire, which has been added to the vehicle as it has been created
        const initialTireDistance = tiresEvents[0].mileage - vehicle.initial_mileage
        const initialTire = { name: vehicle.tyres, distance: initialTireDistance }
        tiresDistances.push(initialTire)

        // Add newest tire, which is still active on the vehicle
        const newestTireDistance = vehicle.actual_mileage - tiresEvents[tiresEvents.length - 1].mileage
        const newestTire = { name: tiresEvents[tiresEvents.length - 1].tires, distance: newestTireDistance }
        tiresDistances.push(newestTire)

        return tiresDistances.sort((a, b) => b.distance - a.distance)
    }

    render() {
        const statisticData = this.calculateStatistic()

        if (statisticData === false){

            return (

                <div className="page">
                    <Header title="Tires longevity" backLink={routes.STATISTIC} />
                    <div className="notification notification--standalone notification--empty-state">
                        <p>Oh no, there is not enough data to calculate this statistic for you.</p>
                    </div>
                </div>

            )

        } else {

            const data = {
                labels: statisticData.map((tires) => tires.name),
                datasets: [
                    {
                        label: 'Kilometers driven',
                        backgroundColor: colors.TIRE_CHANGE_TRANS,
                        borderColor: colors.TIRE_CHANGE,
                        borderWidth: 1,
                        hoverBackgroundColor: colors.TIRE_CHANGE,
                        hoverBorderColor: colors.TIRE_CHANGE,
                        data: statisticData.map((tires) => tires.distance)
                    }
                ]
            }

            const options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

            return (

                <div className="page">
                    <Header title="Tires longevity" backLink={routes.STATISTIC} />
                    <div className="box">
                        <div className="box__content">
                            <Bar data={data} options={options} />
                        </div>
                    </div>
                    <div className="box">
                        <ul className="list list--tires">
                            {statisticData.map((tires, index) => {
                                return (

                                    <li className="list-item" key={index}>
                                        <span>{tires.name}</span>
                                        <span>{tires.distance} km</span>
                                    </li>

                                )
                            })}
                        </ul>
                    </div>
                </div>

            )

        }
    }
}

export default TiresLongevity
