import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

import EventLogItem from './EventLogItem'

class EventLog extends Component {

    render() {
        const events = this.props.events.events
        const loadingEventData = this.props.events.loading

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

            } else {

                // Sort by date first, then sort by mileage
                events.sort((b, a) => new Date(a.date.seconds * 1000) - new Date(a.date.seconds * 1000) || a.mileage - b.mileage)

                return (

                    <div className="event-log">
                        <div className="event-log-line"></div>
                        {events.map((event, index) => <EventLogItem key={index} event={event} {...this.props} />)}
                    </div>

                )

            }
        
        }
    }
}

export default EventLog
