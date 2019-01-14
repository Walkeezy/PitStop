const initialeventReducer = {
    loading: true,
    events: []
}

const eventReducer = function event(state = initialeventReducer, action) {
    switch (action.type) {

        case 'LOAD_EVENTS':
            return {
                ...state,
                events: action.events,
                loading: false
            }

        case 'REMOVE_EVENT':
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.eventId)
            }

        case 'SET_EVENT_LOADING':
            return {
                ...state,
                loading: true
            }

        case 'RESET_EVENT_LOADING':
        return {
            ...state,
            loading: false
        }

        default: return state

    }
}

export default eventReducer
