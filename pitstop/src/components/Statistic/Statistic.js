import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

import Header from '../Layout/Header'



class StatisticPage extends Component {

    componentDidMount() {
        if (this.props.vehicles.activeVehicle && this.props.user.user.uid) {
            this.props.startLoadingStatistics(this.props.user.user.uid, this.props.vehicles.activeVehicle, 'refuel')
        }
    }

    render() {

            if (this.props.events.events) {
                let events = this.props.events.events,
                label = [],
                data = []

                Object.keys(events).map(function(key) {
                    label.push(events[key].date)
                    data.push(events[key].mileage)
                })

                 let statisticConfigData = {
                    labels: label,
                    datasets: [
                        {
                            label: this.props.statistic['refuel'] ? this.props.statistic['refuel'].name : '',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 1000,
                            data: data
                        }
                    ]
                };

                return (
                    <div className="page">
                        <Header title={'Statistics for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name} />
                        <div className="content-box">
                            <Line data={statisticConfigData} />
                        </div>
                    </div>

                )

            }

    }
}

export default StatisticPage
