import React, { Component } from 'react'
import Icon from './../../Layout/Icons'
import moment from 'moment'

class EventLogItem extends Component {

    numberWithThousands = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")

    render() {
        const event = this.props.event
        return (

            <div className="event-log-item">
                <div className={"event__icon icon icon--" + event.type}>
                    <Icon name={event.type} />
                </div>
                <div className="event__content">
                    <p className="event__date">{moment(event.date.seconds, 'X').format('dddd, D. MMMM YYYY')}</p>
                    <p className="event__title">{event.amount}l refueld</p>
                    <p className="event__details">
                        <span className="event__mileage">{this.numberWithThousands(event.mileage)} km</span><br />
                        <span className="event__price">CHF {this.numberWithThousands(event.price)}</span>
                    </p>
                </div>
            </div>

        )
    }
}

export default EventLogItem
