import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'
import * as routes from '../../../constants/routes'
import * as colors from '../../../constants/colors'

import Header from './../../Layout/Header'

class MaintenanceCosts extends Component {

    render() {
        const events = this.props.events.eventsArray

        let eventsFiltered = {},
            labels         = [],
            dataSet        = [],
            color          = [],
            eventList      = []

        events.forEach(e => {
            if (eventsFiltered[e.type] === undefined) {
                eventsFiltered[e.type]       = {}
                eventsFiltered[e.type].costs = 0
            }

            eventsFiltered[e.type].costs += parseInt(e.price)

            switch (e.type) {
                case 'refuel':
                    eventsFiltered[e.type].color = colors.REFUEL
                    eventsFiltered[e.type].label = 'Refuel'
                    break
                case 'tires-change':
                    eventsFiltered[e.type].color = colors.TIRE_CHANGE
                    eventsFiltered[e.type].label = 'Tires Change'
                    break
                case 'oil-refill':
                    eventsFiltered[e.type].color = colors.OIL_REFILL
                    eventsFiltered[e.type].label = 'Oil Refill'
                    break
                case 'oil-change':
                    eventsFiltered[e.type].color = colors.OIL_CHANGE
                    eventsFiltered[e.type].label = 'Oil Change'
                    break
                case 'inspection-service':
                    eventsFiltered[e.type].color = colors.INSPECTION
                    eventsFiltered[e.type].label = 'Service & Repairs'
                    break
                default:
                    return null
            }
        })

        for (let prop in eventsFiltered) {
            labels.push(eventsFiltered[prop].label)
            dataSet.push(parseFloat(eventsFiltered[prop].costs).toFixed(2))
            color.push(eventsFiltered[prop].color)
            eventList.push({
                label: eventsFiltered[prop].label,
                costs: parseFloat(eventsFiltered[prop].costs).toFixed(2)
            })
        }

        eventList.sort((a,b) => (parseFloat(a.costs) < parseFloat(b.costs)) ? 1 : ((parseFloat(b.costs) < parseFloat(a.costs)) ? -1 : 0));

        const data = {
            labels  : labels,
            datasets: [
                {
                    backgroundColor     : color,
                    borderColor         : color,
                    borderWidth         : 1,
                    hoverBackgroundColor: color,
                    hoverBorderColor    : color,
                    lineTension         : 0,
                    data                : dataSet
                }
            ]
        }

        return (

            <div className="page">
                <Header title="Maintenance Costs" backLink={routes.STATISTIC}/>
                <div className="box">
                    <div className="box__content">
                        <Doughnut data={data} />
                    </div>
                </div>
                <div className="box">
                    <ul className="list list--maintenance">
                        {eventList.map((props, index) => {
                            return (

                                <li className="list-item" key={index}>
                                    <span>{props.label}</span>
                                    <span>{props.costs} CHF</span>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </div>

        )
    }
}

export default MaintenanceCosts
