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
export function startLoadingVehicles(userId) {
    return (dispatch) => {
        return database.ref(`users/${userId}/vehicles`).once('value').then((snapshot) => {
            const vehicles = []
            for (let key in snapshot.val()) {
                let snapshotValue = snapshot.val()[key]
                snapshotValue.id = key
                vehicles.push(snapshotValue)
            }
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

export function resetVehicleToEdit() {
    return {
        type: 'RESET_VEHICLE_TO_EDIT'
    }
}

export function setVehicleAsActive(vehicleId) {
    return {
        type: 'SET_VEHICLE_AS_ACTIVE',
        vehicleId: vehicleId
    }
}
