import React, { Component } from 'react'
import EventFormRefuel from './Forms/EventFormRefuel'
import EventFormTiresChange from './Forms/EventFormTiresChange'
import EventFormOilRefill from './Forms/EventFormOilRefill'
import EventFormOilChange from './Forms/EventFormOilChange'
import EventFormInspectionService from './Forms/EventFormInspectionService'

class EventForm extends Component {

    renderFormSwitch = param => {
        switch(param) {
            case 'refuel':
                return <EventFormRefuel {...this.props}/>
            case 'tires-change':
                return <EventFormTiresChange {...this.props}/>
            case 'oil-refill':
                return <EventFormOilRefill {...this.props}/>
            case 'oil-change':
                return <EventFormOilChange {...this.props}/>
            case 'inspection-service':
                return <EventFormInspectionService {...this.props}/>
            default:
                return null;
        }
    }

    render() {
        return this.renderFormSwitch(this.props.match.params.type)
    }
}

export default EventForm
