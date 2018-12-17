const initialeventReducer = {
    loading: true,
    events: {},
    // TODO: Change everything to array version or remove it
    eventsArray: []
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
                // TODO: Change everything to array version or remove it
                eventsArray: action.eventsArray,
                loading: false
            }

        // This isn't the most beautiful solution ...
        case 'RESET_EVENT_LOADING':
            return {
                ...state,
                loading: false
            }

        default: return state

    }
}

export default eventReducer
