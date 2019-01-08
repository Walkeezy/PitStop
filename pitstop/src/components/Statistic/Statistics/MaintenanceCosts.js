import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'
import * as routes from '../../../constants/routes'
import * as colors from '../../../constants/colors'

import Header from './../../Layout/Header'

class MaintenanceCosts extends Component {

    render() {
        const events = this.props.events.eventsArray

        let eventsFiltered = {},
            labels         = [],
            dataSet        = [],
            color          = []

        events.forEach(e => {
            if (eventsFiltered[e.type] === undefined) {
                eventsFiltered[e.type]       = {}
                eventsFiltered[e.type].costs = 0
            }
            eventsFiltered[e.type].costs += e.price

            switch (e.type) {
                case 'refuel':
                    eventsFiltered[e.type].color = colors.REFUEL
                    break
                case 'tires-change':
                    eventsFiltered[e.type].color = colors.TIRE_CHANGE
                    break
                case 'oil-refill':
                    eventsFiltered[e.type].color = colors.OIL_REFILL
                    break
                case 'oil-change':
                    eventsFiltered[e.type].color = colors.OIL_CHANGE
                    break
                case 'inspection-service':
                    eventsFiltered[e.type].color = colors.INSPECTION
                    break
                default:
                    return null
            }
        })

        for (let prop in eventsFiltered) {
            labels.push(prop)
            dataSet.push(eventsFiltered[prop].costs)
            color.push(eventsFiltered[prop].color)
        }

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
                    <Doughnut data={data}/>
                </div>
            </div>

        )
    }
}

export default MaintenanceCosts
