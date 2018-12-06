import React, { Component } from 'react'
import EventFormRefuel from './Forms/EventFormRefuel'
import EventFormTiresChange from './Forms/EventFormTiresChange'
import EventFormOilRefill from './Forms/EventFormOilRefill'
import EventFormOilChange from './Forms/EventFormOilChange'

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
                return 'form inspection-service';
            default:
                return null;
        }
    }

    render() {
        return (

            <div>
                {this.renderFormSwitch(this.props.match.params.type)}
            </div>

        )
    }
}

export default EventForm
