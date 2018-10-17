import {combineReducers} from 'redux'

// TODO: Remove this later
import logEntries from '../fakedata/logentries'

const initialUserReducer = {
    loading: true,
    authenticated: false,
    user: []
}

const userReducer = function user(state = initialUserReducer, action) {
    switch (action.type) {

        case 'SET_USER':
            return { loading: false, authenticated: true, user: action.user  }

        case 'UNSET_USER':
            return { loading: false, authenticated: false, user: [] }

        case 'CREATE_USER_SUCCESS':
            const { user: { uid: userId } } = action
            return { ...state, loggedIn: true, userId }

        case 'CREATE_USER_FAIL':
            const { error } = action
            return { ...state, loggedIn: false, error }

        default: return state

    }
}

const initialVehicleReducer = {
    loading: true,
    vehicles: [],
    activeVehicle: '',
    toEdit: '',
}

const vehicleReducer = function vehicles(state = initialVehicleReducer, action) {
    switch (action.type) {

        case 'REMOVE_VEHICLE':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]

        case 'ADD_VEHICLE':
            return [...state, action.vehicle]

        case 'LOAD_VEHICLES':
            return { ...state, vehicles: action.vehicles }

        case 'SET_VEHICLE_TO_EDIT':
            return { ...state, toEdit: action.vehicleId }

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
