import React, { Component } from 'react'

class EventLogDeleteItem extends Component {

    constructor() {
        super()
        this.deleteEventItem = this.deleteEventItem.bind(this)
    }

    deleteEventItem(eventId) {
        if (eventId) {
            this.props.startRemovingEvent(this.props.vehicles.activeVehicle, eventId)
        }
    }

    render() {

        return (

            <button onClick={() => this.deleteEventItem(this.props.eventId)}>Delete Event</button>

        )
    }
}

export default EventLogDeleteItem
