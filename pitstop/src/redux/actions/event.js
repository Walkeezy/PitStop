import { database, auth } from './../../database/config'
import { history } from './../../history'
import * as routes from './../../constants/routes'

// ASYNC ACTIONS
// -----------------------------------------------------

export function startAddingEvent(vehicleId, event) {
    return (dispatch) => {
        event._created = new Date()
        return database.collection('users').doc(auth.currentUser.uid).collection('vehicles').doc(vehicleId).collection('events').add(event)
        .then(() => {
            dispatch(startLoadingEvents(auth.currentUser.uid, vehicleId))
            history.push(routes.HOME)
        })
        .catch((error) => {
            console.error('Error adding event: ', error)
        })
    }
}

// Load events from database, then dispatch loadEvents action
export function startLoadingEvents(userId, vehicleId) {
    return (dispatch) => {
        return database.collection('users').doc(userId).collection('vehicles').doc(vehicleId).collection('events').orderBy('date', 'desc').get()
        .then((docs) => {
            let events = {}
            docs.forEach(function (doc) {
                const key = doc.id
                events[key] = doc.data()
            })
            dispatch(loadEvents(events))
        })
        .catch((error) => {
            console.error('Error loading events: ', error)
        })
    }
}


// REGULAR ACTIONS
// -----------------------------------------------------

export function addEvent(eventId, event) {
    return {
        type: 'ADD_EVENT',
        eventId,
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
