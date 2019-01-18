import { database, auth } from './../../database/config'
import { history } from './../../history'
import * as routes from './../../constants/routes'
import { addNotification } from './notification'

// ASYNC ACTIONS
// -----------------------------------------------------

export function startAddingEvent(vehicleId, event) {
    return (dispatch) => {
        event._created = new Date()
        return database.collection('users').doc(auth.currentUser.uid).collection('vehicles').doc(vehicleId).collection('events').add(event)
        .then(() => {
            dispatch(startLoadingEvents(auth.currentUser.uid, vehicleId))
            history.push(routes.HOME)
            dispatch(addNotification('success', 'Your event has been added.'))
        })
        .catch((error) => {
            dispatch(addNotification('error', error.message))
            console.error('Error adding event: ', error)
        })
    }
}

export function startEditingEvent(vehicleId, eventId, event) {
    return (dispatch) => {
        event._modified = new Date()
        return database.collection('users').doc(auth.currentUser.uid).collection('vehicles').doc(vehicleId).collection('events').doc(eventId).update(event)
            .then(() => {
                dispatch(startLoadingEvents(auth.currentUser.uid, vehicleId))
                history.push(routes.HOME)
                dispatch(addNotification('success', 'Your event has been updated.'))
            })
            .catch((error) => {
                dispatch(addNotification('error', error.message))
                console.error('Error updating event: ', error)
            })
    }
}

// Load events from database, then dispatch loadEvents action
export function startLoadingEvents(userId, vehicleId) {
    return (dispatch) => {
        return database.collection('users').doc(userId).collection('vehicles').doc(vehicleId).collection('events').orderBy('date', 'desc').get()
        .then((docs) => {
            let events = []
            docs.forEach(function (doc) {
                let event = doc.data()
                event.id = doc.id
                events.push(event)
            })
            dispatch(loadEvents(events, events))
        })
        .catch((error) => {
            console.error('Error loading events: ', error)
        })
    }
}

// Delete event
export function startRemovingEvent(vehicleId, eventId) {
    return (dispatch) => {
        return database.collection('users').doc(auth.currentUser.uid).collection('vehicles').doc(vehicleId).collection('events').doc(eventId).delete()
            .then(() => {
                history.push(routes.HOME)
                dispatch(removeEvent(eventId))
                dispatch(addNotification('success', 'Your event has been deleted.'))
            })
            .catch((error) => {
                dispatch(addNotification('error', error.message))
                console.error('Error removing vehicle: ', error)
            })
    }
}

// REGULAR ACTIONS
// -----------------------------------------------------

export function removeEvent(eventId) {
    return {
        type: 'REMOVE_EVENT',
        eventId
    }
}

export function loadEvents(events) {
    return {
        type: 'LOAD_EVENTS',
        events
    }
}

export function setEventLoading() {
    return {
        type: 'SET_EVENT_LOADING'
    }
}

export function resetEventLoading() {
    return {
        type: 'RESET_EVENT_LOADING'
    }
}

export function cleanUpEvents() {
    return {
        type: 'CLEANUP_EVENTS'
    }
}
