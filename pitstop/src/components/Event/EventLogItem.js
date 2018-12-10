import React, { Component } from 'react'
import Refuel from './EventLogItems/Refuel'
import TiresChange from './EventLogItems/TiresChange'
import OilRefill from './EventLogItems/OilRefill'
import OilChange from './EventLogItems/OilChange'
import InspectionService from './EventLogItems/InspectionService'

class EventLogItem extends Component {

    renderEventLogItemSwitch = param => {
        switch (param) {
            case 'refuel':
                return <Refuel {...this.props} />
            case 'tires-change':
                return <TiresChange {...this.props} />
            case 'oil-refill':
                return <OilRefill {...this.props} />
            case 'oil-change':
                return <OilChange {...this.props} />
            case 'inspection-service':
                return <InspectionService {...this.props} />
            default:
                return null;
        }
    }

    render() {
        return this.renderEventLogItemSwitch(this.props.event.type)
    }

}

export default EventLogItem
