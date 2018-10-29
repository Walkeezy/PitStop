const initialeventReducer = {
    loading: true,
    events: {}
}

const eventReducer = function event(state = initialeventReducer, action) {
    switch (action.type) {

        case 'ADD_EVENT':
            return {
                ...state,
                events: {
                    ...state.events,
                    [action.eventId]: action.event
                }
            }

        case 'LOAD_EVENTS':
            return {
                ...state,
                events: action.events,
                loading: false
            }

        default: return state

    }
}

export default eventReducer
