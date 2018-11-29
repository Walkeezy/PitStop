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
        console.log('this.props', this.props.statistic['refuel']);



        let data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 30]
                }
            ]
        };

        return (
            <div className="page">
                <Header title={'Statistics for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name} />
                <div className="content-box">
                    <Line data={data} />
                </div>
            </div>

        )
    }
}

export default StatisticPage
