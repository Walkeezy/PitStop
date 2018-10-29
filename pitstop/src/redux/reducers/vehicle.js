const initialVehicleReducer = {
    loading: true,
    vehicles: {},
    activeVehicle: ''
}

const vehicleReducer = function vehicles(state = initialVehicleReducer, action) {
    switch (action.type) {

        case 'EDIT_VEHICLE':
            return {
                ...state,
                vehicles: {
                    ...state.vehicles,
                    [action.vehicleId]: action.vehicle
                }
            }

        case 'REMOVE_VEHICLE':
            // Seperate vehicle to remove and all other vehicles into seperate variables
            // Read more about this here:
            // https://github.com/airbnb/javascript/blob/master/README.md#objects--rest-spread
            const { [action.vehicleId]:vehicle, ...vehiclesWithoutRemoved } = state.vehicles
            return {
                ...state,
                vehicles: vehiclesWithoutRemoved
            }

        case 'LOAD_VEHICLES':
            return {
                ...state,
                vehicles: action.vehicles,
                loading: false
            }

        case 'SET_VEHICLE_AS_ACTIVE':
            return {
                ...state,
                activeVehicle: action.vehicleId
            }

        case 'SET_ACTUAL_MILEAGE':
            return {
                ...state,
                vehicles: {
                    ...state.vehicles,
                    [action.vehicleId]: {
                        ...state.vehicles[action.vehicleId],
                        actual_mileage: action.mileage
                    }
                }
            }

        default: return state

    }
}

export default vehicleReducer
