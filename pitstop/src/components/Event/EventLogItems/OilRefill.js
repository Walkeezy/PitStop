import React, { Component } from 'react'
import Icon from '../../Layout/Icons'

class EventLogItem extends Component {

    render() {
        const event = this.props.event

        return (

            <div className="event-log-item">
                <div className="event__icon">
                    <Icon name={event.type} />
                </div>
                <div className="event__content">
                    <p className="event__title">{event.amount}dl refilled</p>
                    <p className="event__details">
                        <span className="event__description">{event.description}</span><br />
                        <span className="event__date">{event.date}</span><br />
                        <span className="event__mileage">{event.mileage}</span><br />
                        <span className="event__price">{event.price}</span>
                    </p>
                </div>
            </div>

        )
    }
}

export default EventLogItem
