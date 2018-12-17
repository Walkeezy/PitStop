import React, { Component } from 'react'
import {withRouter} from 'react-router'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import SwitchStatistics from './SwitchStatistics'

class ViewStatistic extends Component {

    render() {
        const headerTitle = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle]
            ? 'View statistics for ' + this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].name
            : 'View statistics'

        return (

            <div className="page">
                <Header title={headerTitle} backLink={routes.STATISTIC} />
                <div className="content-box">
                    <SwitchStatistics {...this.props} />
                </div>
            </div>

        )
    }
}

// Needs to be withRouter to get url params
export default withRouter(ViewStatistic)
