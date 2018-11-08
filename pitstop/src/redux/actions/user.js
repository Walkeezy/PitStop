import { database, auth } from './../../database/config'
import { history } from './../../history'
import * as routes from './../../constants/routes'
import moment from 'moment'

import { startLoadingVehicles, setVehicleAsActive, resetVehicleLoading } from './vehicle'
import { startLoadingEvents, resetEventLoading } from './event'

// ASYNC ACTIONS
// -----------------------------------------------------

// Check if user is signed in
export function verifyUser() {
    return (dispatch) => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                // If user is signed in, save user to redux store and load his vehicles
                dispatch(setUser(user))
                console.log('user', user);
                dispatch(startLoadingVehicles(user.uid))
                dispatch(loadUserDetails(user.uid))
            } else {
                dispatch(unsetUser())

                // This isn't the most beautiful solution ...
                dispatch(resetVehicleLoading())
                dispatch(resetEventLoading())
            }
        })
    }
}

// Load user details (firstname, lastname & active vehicle)
export function loadUserDetails(userId) {
    return (dispatch) => {
        console.log('userid', userId);
        return database.collection(`users`).doc(userId).get().then((snapshot) => {
            console.log('snapshot12', snapshot);
            const activeVehicle = snapshot.child('active_vehicle').val()
            const details = {
                'firstname': snapshot.child('firstname').val(),
                'lastname': snapshot.child('lastname').val()
            }
            // dispatch(setVehicleAsActive(activeVehicle))
            // dispatch(setUserDetails(details))
            // dispatch(startLoadingEvents(userId, activeVehicle))
        }).catch((error) => {
            alert(error)
        })
    }
}

// Create user on firebase, then save user to database, then dispatch setUser action
export function startCreatingUser(user) {
    return (dispatch) => {
        return auth.createUserWithEmailAndPassword(user.email, user.password).then(authUser => {
            database.collection(`users/${authUser.user.uid}`).add({
                _created: moment().format('DD.MM.YYYY HH:mm:ss'),
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            }).then(() => {
                dispatch(setUser(user))
                history.push(routes.HOME)
            })
        }).catch((error) => {
            alert(error)
            //dispatch(createUserFail(error));
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

// Do password reset on user
export function passwordResetUser(email) {
    return (dispatch) => {
        return auth.sendPasswordResetEmail(email).then(() => {
            history.push(routes.SIGN_IN)
        }).catch((error) => {
            alert(error)
        });
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

export function setUserDetails(details) {
    return {
        type: 'SET_USER_DETAILS',
        details
    }
}
