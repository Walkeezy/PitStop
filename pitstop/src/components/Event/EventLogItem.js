import React, { Component } from 'react'
import Icon from './../Layout/Icons'

class EventLogItem extends Component {
    render() {
        const event = this.props.event
        return (

            <div className="event-log-item">
                <div className="event__icon">
                    <Icon name="fuel" />
                </div>
                <div className="event__content">
                    <p className="event__title">{event.type}</p>
                    <p className="event__details">
                        <span className="event__date">{event.date}</span><br/>
                        <span className="event__mileage">{event.mileage}</span>
                    </p>
                </div>
            </div>

        )
    }
}

export default EventLogItem
