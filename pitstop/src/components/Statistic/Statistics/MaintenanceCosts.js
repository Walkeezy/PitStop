import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'
import * as routes from '../../../constants/routes'

import Header from './../../Layout/Header'

class MaintenanceCosts extends Component {

    render() {
        const events = this.props.events.eventsArray

        let eventsFiltered = {},
            labels = [],
            dataSet = []

        events.forEach(e => {
            if (eventsFiltered[e.type] === undefined) {
                eventsFiltered[e.type] = {}
                eventsFiltered[e.type].costs = 0
            }
            eventsFiltered[e.type].costs += e.price
        })


        for (let prop in eventsFiltered) {
            labels.push(prop)
            dataSet.push(eventsFiltered[prop].costs)
        }

        const data = {
            labels: labels,
            datasets: [
                {
                    // backgroundColor: 'rgba(77, 157, 224, 0.5)',
                    // borderColor: 'rgba(77, 157, 224, 1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    lineTension: 0,
                    data: dataSet
                }
            ]
        };

        return (

            <div className="page">
                <Header title="Maintenance Costs" backLink={routes.STATISTIC} />
                <div className="content-box">
                    <Doughnut data={data} />
                </div>
            </div>

        )
    }
}

export default MaintenanceCosts
