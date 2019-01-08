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

        case 'REMOVE_EVENT':
            // Seperate vehicle to remove and all other vehicles into seperate variables
            // Read more about this here:
            // https://github.com/airbnb/javascript/blob/master/README.md#objects--rest-spread
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
