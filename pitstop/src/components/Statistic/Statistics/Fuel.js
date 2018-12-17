import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'

class FuelStatistic extends Component {

    componentDidMount() {
        if (this.props.vehicles.activeVehicle && this.props.user.user.uid) {
            this.props.startLoadingRefuelStatistic(this.props.user.user.uid, this.props.vehicles.activeVehicle)
        }
    }

    render() {
        if (this.props.statistic.statistic) {
            let data    = {
                    labels  : this.props.statistic.statistic.mileage,
                    datasets: [
                        {
                            label                    : 'liter',
                            fill                     : false,
                            backgroundColor          : 'rgba(75,192,192,0.4)',
                            borderColor              : 'rgba(75,192,192,1)',
                            borderCapStyle           : 'butt',
                            pointBorderColor         : 'rgba(75,192,192,1)',
                            pointBackgroundColor     : '#fff',
                            pointBorderWidth         : 1,
                            pointHoverRadius         : 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor    : 'rgba(220,220,220,1)',
                            pointHoverBorderWidth    : 2,
                            pointHitRadius           : 1000,
                            data                     : this.props.statistic.statistic.amount
                        },
                        {
                            label                    : 'price',
                            fill                     : false,
                            backgroundColor          : 'rgba(75,192,192,0.4)',
                            borderColor              : 'rgba(75,192,192,1)',
                            borderCapStyle           : 'butt',
                            pointBorderColor         : 'rgba(75,192,192,1)',
                            pointBackgroundColor     : '#fff',
                            pointBorderWidth         : 1,
                            pointHoverRadius         : 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor    : 'rgba(220,220,220,1)',
                            pointHoverBorderWidth    : 2,
                            pointHitRadius           : 1000,
                            data                     : this.props.statistic.statistic.price
                        }
                    ]
                },
                options = {
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

                <Line data={data} options={options}/>

            )

        }

    }
}

export default FuelStatistic
