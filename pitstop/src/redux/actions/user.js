import { database, auth } from './../../database/config'
import { history } from './../../history'
import * as routes from './../../constants/routes'

import { startLoadingVehicles } from './vehicle'

// ASYNC ACTIONS
// -----------------------------------------------------

// Check if user is signed in
export function verifyUser() {
    return (dispatch) => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                // If user is signed in, save user to redux store and load his vehicles
                dispatch(setUser(user))
                dispatch(startLoadingVehicles(user.uid))
            } else {
                dispatch(unsetUser())
            }
        })
    }
}

// Create user on firebase, then save user to database, then dispatch setUser action
export function startCreatingUser(user) {
    return (dispatch) => {
        return auth.createUserWithEmailAndPassword(user.email, user.password).then(authUser => {
            database.ref(`users/${authUser.user.uid}`).set({
                username: user.username,
                email: user.email
            }).then((response) => {
                dispatch(createUserSuccess(response))
            })
        }).catch((error) => {
            dispatch(createUserFail(error));
        })
    }
}

// Sign in user on firebase, then dispatch setUser action
export function startLoginUser(user) {
    return (dispatch) => {
        return auth.signInWithEmailAndPassword(user.email, user.password).then(user => {
            dispatch(setUser(user))
            history.push(routes.HOME)
        }).catch((error) => {
            alert(error)
        })
    }
}

// Sign out user on firebase
export function signOutUser() {
    return (dispatch) => {
        return auth.signOut().then(() => {
            dispatch(unsetUser())
        }).catch((error) => {
            alert(error)
        })
    }
}

// REGULAR ACTIONS
// -----------------------------------------------------

export function setUser(user) {
    return {
        type: 'SET_USER',
        user
    }
}

export function unsetUser() {
    return {
        type: 'UNSET_USER'
    }
}

export function createUserSuccess(response) {
    return {
        type: 'CREATE_USER_SUCCESS',
        user: response
    }
}

export function createUserFail(error) {
    return {
        type: 'CREATE_USER_FAIL',
        error: error
    }
}
