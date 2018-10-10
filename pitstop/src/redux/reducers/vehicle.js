function vehicleReducer(state = [], action) {
    switch (action.type) {

        case 'REMOVE_VEHICLE':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]

        case 'ADD_VEHICLE':
            return [...state, action.vehicle]

        case 'LOAD_VEHICLES':
            return action.posts

        default: return state

    }
}

export default vehicleReducer
