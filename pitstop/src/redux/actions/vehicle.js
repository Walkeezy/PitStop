import { database, auth } from './../../database/config'
import { history } from './../../history'
import * as routes from './../../constants/routes'

// ASYNC ACTIONS
// -----------------------------------------------------

// Save vehicle to current user in database, then dispatch editVehicle action with key of new vehicle item in database and vehicle data
export function startAddingVehicle(vehicle) {
    return (dispatch) => {
        vehicle._created = new Date()
        return database.collection('users').doc(auth.currentUser.uid).collection('vehicles').add(vehicle)
        .then((doc) => {
            dispatch(editVehicle(doc.id, vehicle))
            dispatch(setVehicleAsActive(doc.id))
            history.push(routes.ACCOUNT)
        }).catch((error) => {
            console.error('Error adding vehicle: ', error)
        })
    }
}

// Edit vehicle in database, then dispatch editVehicle action with key of vehicle and vehicle data
export function startEditingVehicle(vehicleId, vehicle) {
    return (dispatch) => {
        vehicle._modified = new Date()
        return database.collection('users').doc(auth.currentUser.uid).collection('vehicles').doc(vehicleId).update(vehicle)
        .then(() => {
            dispatch(editVehicle(vehicleId, vehicle))
            history.push(routes.ACCOUNT)
        })
        .catch((error) => {
            console.error('Error updating vehicle: ', error)
        })
    }
}

// Delete vehicle
export function startRemovingVehicle(vehicleId) {
    return (dispatch) => {
        return database.collection('users').doc(auth.currentUser.uid).collection('vehicles').doc(vehicleId).delete()
        .then(() => {
            history.push(routes.ACCOUNT)
            dispatch(removeVehicle(vehicleId))
        })
        .catch((error) => {
            console.error('Error removing vehicle: ', error)
        })
    }
}

// Load vehicles from database, then dispatch loadVehicles action
export function startLoadingVehicles(userId) {
    return (dispatch) => {
        return database.collection('users').doc(userId).collection('vehicles').get()
        .then((docs) => {
            let vehicles = {}
            docs.forEach(function (doc) {
                const key = doc.id
                vehicles[key] = doc.data()
            })
            dispatch(loadVehicles(vehicles))
        })
        .catch((error) => {
            console.error('Error loading vehicles: ', error)
        })
    }
}

// Save vehicle as active in database and dispatch action to save it to store
export function saveVehicleAsActive(vehicleId) {
    return (dispatch) => {
        return database.collection('users').doc(auth.currentUser.uid).update({
            active_vehicle: vehicleId
        })
        .then(() => {
            dispatch(setVehicleAsActive(vehicleId))
        })
        .catch((error) => {
            console.error('Error setting active vehicle: ', error)
        })
    }
}

export function saveActualMileage(vehicleId, mileage) {
    return (dispatch) => {
        return database.collection('users').doc(auth.currentUser.uid).collection('vehicles').doc(vehicleId).update({
            actual_mileage: mileage
        })
        .then(() => {
            dispatch(setActualMileage(vehicleId, mileage))
        })
        .catch((error) => {
            console.error('Error setting actual mileage to vehicle: ', error)
        })
    }
}


// REGULAR ACTIONS
// -----------------------------------------------------

export function editVehicle(vehicleId, vehicle) {
    return {
        type: 'EDIT_VEHICLE',
        vehicleId,
        vehicle
    }
}

export function updateVehicle(vehicleId, vehicle) {
    return {
        type: 'UPDATE_VEHICLE',
        vehicleId,
        vehicle
    }
}

export function removeVehicle(vehicleId) {
    return {
        type: 'REMOVE_VEHICLE',
        vehicleId
    }
}

export function loadVehicles(vehicles) {
    return {
        type: 'LOAD_VEHICLES',
        vehicles
    }
}

export function setVehicleAsActive(vehicleId) {
    return {
        type: 'SET_VEHICLE_AS_ACTIVE',
        vehicleId
    }
}

export function setActualMileage(vehicleId, mileage) {
    return {
        type: 'SET_ACTUAL_MILEAGE',
        vehicleId,
        mileage
    }
}

export function resetVehicleLoading() {
    return {
        type: 'RESET_VEHICLE_LOADING'
    }
}
