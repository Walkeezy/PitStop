import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import EventLogItem from './EventLogItem'

class EventLog extends Component {

    render() {
        const events = this.props.events.events
        const loadingEventData = this.props.events.loading
        events.sort((b, a) => a.date - b.date || a.mileage - b.mileage) // Sort by date first, if it's the same then sort by mileage

        if (loadingEventData) {

            return (

                <div className="bouncing-loader">
                    <div className="bouncing-loader__dot bouncing-loader__dot--blue"></div>
                    <div className="bouncing-loader__dot bouncing-loader__dot--blue"></div>
                    <div className="bouncing-loader__dot bouncing-loader__dot"></div>
                </div>

            )

        } else {

            if(events.length === 0){

                return (

                    <div className="event-log">
                        <div className="notification notification--standalone notification--empty-state">
                            <p>Looks like this vehicle does not have any events yet. <Link to={routes.ADD_EVENT}>Go and add one!</Link></p>
                        </div>
                    </div>

                )

            }

            return (

                <div className="event-log">
                    <div className="event-log-line"></div>
                    {events.map((event, index) => <EventLogItem key={index} event={event} {...this.props} />)}
                </div>

            )
        
        }
    }
}

export default EventLog
