import { database, auth } from './../../database/config'
import { history } from './../../history'
import * as routes from './../../constants/routes'

// ASYNC ACTIONS
// -----------------------------------------------------

// Save vehicle to current user in database, then dispatch editVehicle action with key of new vehicle item in database and vehicle data
export function startAddingVehicle(vehicle) {
    return (dispatch) => {
        return database.ref(`users/${auth.currentUser.uid}/vehicles`).push(vehicle).then((response) => {
            const vehicleId = response.key
            dispatch(editVehicle(vehicleId, vehicle))
            history.push(routes.ACCOUNT)
        }).catch((error) => {
            alert(error)
        })
    }
}

// Edit vehicle in database, then dispatch editVehicle action with key of vehicle and vehicle data
export function startEditingVehicle(vehicleId, vehicle) {
    return (dispatch) => {
        return database.ref(`users/${auth.currentUser.uid}/vehicles/${vehicleId}`).update(vehicle).then(() => {
            dispatch(editVehicle(vehicleId, vehicle))
            history.push(routes.ACCOUNT)
        }).catch((error) => {
            alert(error)
        })
    }
}

// Delete vehicle
export function startRemovingVehicle(vehicleId) {
    return (dispatch) => {
        return database.ref(`users/${auth.currentUser.uid}/vehicles/${vehicleId}`).remove().then(() => {
            dispatch(resetVehicleToEdit())
            dispatch(removeVehicle(vehicleId))
            history.push(routes.ACCOUNT)
        }).catch((error) => {
            alert(error)
        })
    }
}

// Load vehicles from database, then dispatch loadVehicles action
export function startLoadingVehicles(userId) {
    return (dispatch) => {
        return database.ref(`users/${userId}/vehicles`).once('value').then((snapshot) => {
            const vehicles = snapshot.val()
            dispatch(loadVehicles(vehicles))
        })
    }
}

// Save vehicle as active in database and dispatch action to save it to store
export function saveVehicleAsActive(vehicleId) {
    return (dispatch) => {
        dispatch(setVehicleAsActive(vehicleId))
        database.ref(`users/${auth.currentUser.uid}/active_vehicle`).set(vehicleId)
    }
}

// Don't need this anymore, already loading this with loadUserDetails()
// export function loadActiveVehicle(userid) {
//     return (dispatch) => {
//         return database.ref(`users/${userid}/active_vehicle`).once('value').then((snapshot) => {
//             const activeVehicle = snapshot.val()
//             dispatch(setVehicleAsActive(activeVehicle))
//         })
//     }
// }

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

export function setVehicleToEdit(vehicleId) {
    return {
        type: 'SET_VEHICLE_TO_EDIT',
        vehicleId
    }
}

export function resetVehicleToEdit() {
    return {
        type: 'RESET_VEHICLE_TO_EDIT'
    }
}

export function setVehicleAsActive(vehicleId) {
    return {
        type: 'SET_VEHICLE_AS_ACTIVE',
        vehicleId
    }
}
