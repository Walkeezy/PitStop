const initialNotificationReducer = {
    active: false,
    type: '',
    message: ''
}

const errorReducer = function event(state = initialNotificationReducer, action) {

    switch (action.type) {

        case 'ADD_NOTIFICATION':
            return {
                active: true,
                type: action.notificationType,
                message: action.message
            }

        case 'REMOVE_NOTIFICATION':
            return {
                active: false,
                type: '',
                message: ''
            }

        default: return state

    }
}

export default errorReducer
