import React, { Component } from 'react'
import Refuel from './EventForms/Refuel'
import TiresChange from './EventForms/TiresChange'
import OilRefill from './EventForms/OilRefill'
import OilChange from './EventForms/OilChange'
import InspectionService from './EventForms/InspectionService'

class EventForm extends Component {

    renderFormSwitch = param => {
        switch(param) {
            case 'refuel':
                return <Refuel {...this.props}/>
            case 'tires-change':
                return <TiresChange {...this.props}/>
            case 'oil-refill':
                return <OilRefill {...this.props}/>
            case 'oil-change':
                return <OilChange {...this.props}/>
            case 'inspection-service':
                return <InspectionService {...this.props}/>
            default:
                return null;
        }
    }

    render() {
        return this.renderFormSwitch(this.props.match.params.type)
    }
}

export default EventForm
