import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Fuel from './Statistics/FuelConsumption'
import OilConsumption from './Statistics/OilConsumption'
import TiresLongevity from './Statistics/TiresLongevity'
import MaintenanceCosts from './Statistics/MaintenanceCosts'

class ViewStatistic extends Component {

    renderStatistics = param => {
        switch (param) {
            case 'fuel':
                return <Fuel {...this.props} />
            case 'oil-consumption':
                return <OilConsumption {...this.props} />
            case 'tires-longevity':
                return <TiresLongevity {...this.props} />
            case 'maintenance-costs':
                return <MaintenanceCosts {...this.props} />
            default:
                return null;
        }
    }

    render() {
        return this.renderStatistics(this.props.match.params.type)
    }
}

// Needs to be withRouter to get url params
export default withRouter(ViewStatistic)
