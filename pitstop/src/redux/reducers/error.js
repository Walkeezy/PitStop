const initialErrorReducer = {
    error: false,
    message: ''
}

const errorReducer = function event(state = initialErrorReducer, action) {

    switch (action.type) {

        case 'ADD_ERROR':
            return {
                error: true,
                message: action.message
            }

        case 'REMOVE_ERROR':
            return {
                error: false,
                message: ''
            }

        default: return state

    }
}

export default errorReducer
