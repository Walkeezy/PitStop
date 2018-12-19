import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import Icon from '../Layout/Icons'

class StatisticPage extends Component {

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'Statistics for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'Statistics'
        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.HOME}/>
                <div className="content-box">
                    <div className="select-event">
                        <div className="select-event__item">
                            <Link to={routes.STATISTIC + "/fuel"}>
                                <div className="event__icon icon icon--refuel"><Icon name="fuel"/></div>
                                <span className="event__label">View fuel statistic</span>
                            </Link>
                        </div>
                        <div className="select-event__item">
                            <Link to={routes.STATISTIC + "/oil-consumption"}>
                                <div className="event__icon icon icon--oil-refill"><Icon name="oil"/></div>
                                <span className="event__label">View oil consumption</span>
                            </Link>
                        </div>
                        <div className="select-event__item">
                            <Link to={routes.STATISTIC + "/maintenance-costs"}>
                                <div className="event__icon icon icon--inspection-service"><Icon name="breakdown"/>
                                </div>
                                <span className="event__label">View maintenance costs</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default StatisticPage
