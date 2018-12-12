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

            // const events = action.events

            // function sortProperties(obj) {
            //     // convert object into array
            //     var sortable = [];
            //     for (var key in obj)
            //         if (obj.hasOwnProperty(key))
            //             sortable.push([key, obj[key]]); // each item is an array in format [key, value]

            //     // sort items by value
            //     sortable.sort(function (a, b) {
            //         return a[1]['date'] > b[1]['date'] ? -1 : 1; // compare numbers
            //     });
            //     return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
            // }

            // let sortedEvents = sortProperties(events)
            // console.log(sortedEvents)

            return {
                ...state,
                events: action.events,
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
