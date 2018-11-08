import { database, auth } from './../../database/config'
import { history } from './../../history'
import * as routes from './../../constants/routes'
import moment from 'moment'

// ASYNC ACTIONS
// -----------------------------------------------------

export function startAddingEvent(vehicleId, event) {
    return (dispatch) => {
        event._created = moment().format('DD.MM.YYYY HH:mm:ss')
        return database.collection(`users/${auth.currentUser.uid}/vehicles/${vehicleId}/events`).push(event).then((response) => {
            const eventId = response.key
            dispatch(addEvent(eventId, event))
            history.push(routes.HOME)
        }).catch((error) => {
            alert(error)
        })
    }
}

// Load events from database, then dispatch loadEvents action
export function startLoadingEvents(userId, vehicleId) {
    return (dispatch) => {
        return database.collection(`users/${userId}/vehicles/${vehicleId}/events`).get('value').then((snapshot) => {
            const events = snapshot.val()
            dispatch(loadEvents(events))
        })
    }
}


// REGULAR ACTIONS
// -----------------------------------------------------

export function addEvent(vehicleId, event) {
    return {
        type: 'ADD_EVENT',
        vehicleId,
        event
    }
}

export function loadEvents(events) {
    return {
        type: 'LOAD_EVENTS',
        events
    }
}

export function resetEventLoading() {
    return {
        type: 'RESET_EVENT_LOADING'
    }
}
