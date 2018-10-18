const initialUserReducer = {
    loading: true,
    authenticated: false,
    user: []
}

const userReducer = function user(state = initialUserReducer, action) {
    switch (action.type) {

        case 'SET_USER':
            return { loading: false, authenticated: true, user: action.user }

        case 'UNSET_USER':
            return { loading: false, authenticated: false, user: [] }

        case 'CREATE_USER_SUCCESS':
            const { user: { uid: userId } } = action
            return { ...state, loggedIn: true, userId }

        case 'CREATE_USER_FAIL':
            const { error } = action
            return { ...state, loggedIn: false, error }

        default: return state

    }
}

export default userReducer
