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

        case 'SET_VEHICLE_AS_ACTIVE':
            return { ...state, activeVehicle: action.vehicleId }

        default: return state

    }
}

export default vehicleReducer
