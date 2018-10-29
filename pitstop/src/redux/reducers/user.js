const initialUserReducer = {
    loading: true,
    authenticated: false,
    user: [],
    details: {
        firstname: '',
        lastname: ''
    }
}

const userReducer = function user(state = initialUserReducer, action) {
    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                loading: false,
                authenticated: true,
                user: action.user
            }

        case 'UNSET_USER':
            return {
                ...state,
                loading: false,
                authenticated: false
            }

        case 'SET_USER_DETAILS':
            return {
                ...state,
                details: action.details
            }

        default: return state

    }
}

export default userReducer
