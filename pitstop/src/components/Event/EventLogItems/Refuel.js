import React, { Component } from 'react'
import Icon from './../../Layout/Icons'
import moment from 'moment'
import { Link } from 'react-router-dom'
import * as routes from '../../../constants/routes'

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
                        <span className="event__mileage">Mileage: {this.numberWithThousands(event.mileage)} km</span><br />
                        <span className="event__price">Price: CHF {this.numberWithThousands(parseFloat(event.price).toFixed(2))}</span>
                    </p>
                    <Link className="event__edit button button--small" to={routes.EDIT_EVENT + "/" + event.type + "/" + event.id}>Edit event</Link>
                </div>
            </div>

        )
    }
}

export default EventLogItem
