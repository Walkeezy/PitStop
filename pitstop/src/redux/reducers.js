import {combineReducers} from 'redux'

// TODO: Remove this later
import logEntries from '../fakedata/logentries'

const userReducer = function user(state = [], action) {
    switch (action.type) {

        case 'CREATE_USER_SUCCESS':
            const { user: { uid: userId } } = action
            return { ...state, loggedIn: true, userId }

        case 'CREATE_USER_FAIL':
            const { error } = action
            return { ...state, loggedIn: false, error }

        default: return state

    }
}

const vehicleReducer = function vehicles(state = [], action) {
    switch (action.type) {

        case 'REMOVE_VEHICLE':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]

        case 'ADD_VEHICLE':
            return [...state, action.vehicle]

        case 'LOAD_VEHICLES':
            return action.vehicles

        default: return state

    }
}

const logReducer = function logentries(state = logEntries, action) {
    switch (action.type) {

        default: return state

    }
}

const rootReducer = combineReducers({ userReducer, vehicleReducer, logReducer })

export default rootReducer
