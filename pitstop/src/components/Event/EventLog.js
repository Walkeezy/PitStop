import React, {Component} from 'react'

import VehicleSwitch from '../Vehicle/VehicleSwitch'

class EventLog extends Component {
    render() {
        const events = this.props.events.events

        if (events) {
            return (

                <div className="vehicle-log">
                    <VehicleSwitch {...this.props} />

                    <h2>Events</h2>

                    {Object.keys(events).map((key, index) => {
                        return (
                            <li className="list-item" key={index}>
                                <span className="">{events[key].type}</span>
                                <span className="">{events[key].date}</span>
                            </li>
                        )
                    })}

                </div>

            )
        } else {
            return (

                <div className="vehicle-log">
                    <VehicleSwitch {...this.props} />

                    <h2>Events</h2>

                    <p>No events found for this vehicle. Go and add some!</p>

                </div>

            )
        }
    }
}

export default EventLog
