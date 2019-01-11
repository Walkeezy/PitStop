const initialeventReducer = {
    loading: true,
    events: {},
    eventsArray: []
}

const eventReducer = function event(state = initialeventReducer, action) {
    switch (action.type) {

        case 'LOAD_EVENTS':
            return {
                ...state,
                events: action.events,
                eventsArray: action.eventsArray,
                loading: false
            }

        case 'REMOVE_EVENT':
            // Seperate vehicle to remove and all other vehicles into seperate variables
            const { [action.eventId]:event, ...eventsWithoutRemoved } = state.events
            return {
                ...state,
                events: eventsWithoutRemoved,
                eventsArray: state.eventsArray.filter(event => event !== action.eventId)
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
