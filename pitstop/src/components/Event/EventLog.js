import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import EventLogItem from './EventLogItem'

class EventLog extends Component {

    render() {
        const events = this.props.events.events
        const loadingEventData = this.props.events.loading
        events.sort((b, a) => a.date - b.date || a.mileage - b.mileage) // Sort by date first, if it's the same then sort by mileage

        const eventlog = events.length !== 0
            ? events.map((event, index) => <EventLogItem key={index} event={event} {...this.props} />)
            : <p>No events found for this vehicle. <Link to={routes.ADD_EVENT}>Go and add some!</Link></p>

        if (loadingEventData) {
            return (

                <div className="bouncing-loader">
                    <div className="bouncing-loader__dot bouncing-loader__dot--blue"></div>
                    <div className="bouncing-loader__dot bouncing-loader__dot--blue"></div>
                    <div className="bouncing-loader__dot bouncing-loader__dot"></div>
                </div>

            )
        } else {
            return (

                <div className="event-log">
                    {events.length !== 0 && <div className="event-log-line"></div>}
                    {eventlog}
                </div>

            )
        }
    }
}

export default EventLog
