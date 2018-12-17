import React, { Component } from 'react'
import Fuel from './Statistics/Fuel'
import OilConsumption from './Statistics/OilConsumption'

class Statistic extends Component {

    renderStatistics = param => {
        switch (param) {
            case 'fuel':
                return <Fuel {...this.props} />
            case 'oil-consumption':
                return <OilConsumption {...this.props} />
            default:
                return null;
        }
    }

    render() {
        return this.renderStatistics(this.props.match.params.type)
    }

}

export default Statistic
