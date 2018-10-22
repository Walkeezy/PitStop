const initialVehicleReducer = {
    loading: true,
    vehicles: [],
    activeVehicle: '',
    toEdit: '',
}

const vehicleReducer = function vehicles(state = initialVehicleReducer, action) {
    switch (action.type) {

        case 'REMOVE_VEHICLE':
            // This is not working
            // return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
            return

        case 'ADD_VEHICLE':
            // This is not working
            // return [...state, action.vehicle]
            return

        case 'LOAD_VEHICLES':
            return { ...state, vehicles: action.vehicles }

        case 'SET_VEHICLE_TO_EDIT':
            return { ...state, toEdit: action.vehicleId }

        case 'RESET_VEHICLE_TO_EDIT':
            return { ...state, toEdit: '' }

        case 'SET_VEHICLE_AS_ACTIVE':
            return { ...state, activeVehicle: action.vehicleId }

        default: return state

    }
}

export default vehicleReducer
