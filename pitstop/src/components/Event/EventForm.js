import React, { Component } from 'react'
import EventFormRefuel from './Forms/EventFormRefuel'
import EventFormTiresChange from './Forms/EventFormTiresChange'

class EventForm extends Component {

    renderFormSwitch = param => {
        switch(param) {
            case 'refuel':
                return <EventFormRefuel {...this.props}/>
            case 'tires-change':
                return <EventFormTiresChange {...this.props}/>
            case 'oil-refill':
                return 'form oil-refill';
            case 'oil-change':
                return 'form oil-change';
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
