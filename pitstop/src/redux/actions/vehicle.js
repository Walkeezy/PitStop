import { database, auth } from './../../database/config'

// ASYNC ACTIONS
// -----------------------------------------------------

// Save vehicle to current user in database, then dispatch addVehicle action
export function startAddingVehicle(vehicle) {
    return (dispatch) => {
        return database.ref(`users/${auth.currentUser.uid}/vehicles`).push(vehicle).then(() => {
            dispatch(addVehicle(vehicle))
        }).catch((error) => {
            alert(error)
        })
    }
}

// Load vehicles from database, then dispatch loadVehicles action
export function startLoadingVehicles(userid) {
    return (dispatch) => {
        return database.ref(`users/${userid}/vehicles`).once('value').then((snapshot) => {
            let vehicles = []
            snapshot.forEach(childSnapshot => {
                vehicles.push(childSnapshot.val())
            })
            dispatch(loadVehicles(vehicles))
        })
    }
}

export function saveVehicleAsActive(vehicleId) {
    return (dispatch) => {
        dispatch(setVehicleAsActive(vehicleId))
        database.ref(`users/${auth.currentUser.uid}/active_vehicle`).set(vehicleId)
    }
}

// REGULAR ACTIONS
// -----------------------------------------------------

export function addVehicle(vehicle) {
    return {
        type: 'ADD_VEHICLE',
        vehicle: vehicle
    }
}

export function loadVehicles(vehicles) {
    return {
        type: 'LOAD_VEHICLES',
        vehicles: vehicles
    }
}

export function setVehicleToEdit(vehicleId) {
    return {
        type: 'SET_VEHICLE_TO_EDIT',
        vehicleId: vehicleId
    }
}

export function setVehicleAsActive(vehicleId) {
    return {
        type: 'SET_VEHICLE_AS_ACTIVE',
        vehicleId: vehicleId
    }
}
