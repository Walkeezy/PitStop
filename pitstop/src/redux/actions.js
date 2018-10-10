import { database } from '../database/config'

export function startAddingVehicle(vehicle) {
    console.log(vehicle)
    return (dispatch) => {
        return database.ref('vehicles').push(vehicle).then(() => {
            dispatch(addVehicle(vehicle))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function addVehicle(vehicle) {
    return {
        type: 'ADD_VEHICLE',
        vehicle
    }
}
