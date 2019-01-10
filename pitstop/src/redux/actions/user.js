import { database, auth, emailAuthProvider } from './../../database/config'
import { history } from './../../history'
import * as routes from './../../constants/routes'
import { startLoadingVehicles, setVehicleAsActive, resetVehicleLoading } from './vehicle'
import { startLoadingEvents, resetEventLoading } from './event'
import { addNotification } from './notification'

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
                dispatch(loadUserDetails(user.uid))
            } else {
                dispatch(unsetUser())
                dispatch(resetVehicleLoading())
                dispatch(resetEventLoading())
            }
        })
    }
}

// Load user details (firstname, lastname & active vehicle)
export function loadUserDetails(userId) {
    return (dispatch) => {
        return database.collection('users').doc(userId).get()
        .then((doc) => {
            if (doc.exists) {
                const details = {
                    'firstname': doc.data().firstname,
                    'lastname': doc.data().lastname
                }
                dispatch(setUserDetails(details))
                if (doc.data().active_vehicle) {
                    const activeVehicle = doc.data().active_vehicle
                    dispatch(setVehicleAsActive(activeVehicle))
                    dispatch(startLoadingEvents(userId, activeVehicle))
                } else {
                    dispatch(resetEventLoading())
                }
            } else {
                dispatch(addNotification('error', 'User not found in database'))
                console.error('User not found in database')
            }
        })
        .catch((error) => {
            dispatch(addNotification(error.message))
            console.error('Error loading user details: ', error)
        })
    }
}

// Create user on firebase, then save user to database, then dispatch setUser action
export function startCreatingUser(user) {
    return (dispatch) => {
        return auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(authUser => {
            database.collection('users').doc(`${ authUser.user.uid }`).set({
                _created: new Date(),
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                active_vehicle: ''
            })
            .then(() => {
                dispatch(setUser(user))
                dispatch(addNotification('success', 'Successfully created your account. Welcome ' + user.firstname + '!'))
                history.push(routes.HOME)
            })
            .catch((error) => {
                dispatch(addNotification('error', error.message))
                console.error('Error adding user to database: ', error)
            })
        })
        .catch((error) => {
            dispatch(addNotification('error', error.message))
            console.error('Error creating user on firebase: ', error)
        })
    }
}

// Sign in user on firebase, then dispatch setUser action
export function startLoginUser(user) {
    return (dispatch) => {
        return auth.signInWithEmailAndPassword(user.email, user.password)
        .then(user => {
            dispatch(setUser(user))
            dispatch(addNotification('success', 'Successfully logged in. Welcome back!'))
            history.push(routes.HOME)
        })
        .catch((error) => {
            dispatch(addNotification('error', error.message))
            console.error('Error signing-in user: ', error)
        })
    }
}

// Sign out user on firebase
export function signOutUser() {
    return (dispatch) => {
        return auth.signOut()
        .then(() => {
            dispatch(unsetUser())
        })
        .catch((error) => {
            dispatch(addNotification('error', error.message))
            console.error('Error signing-out user: ', error)
        })
    }
}

// Do password reset on user
export function passwordResetUser(email) {
    return (dispatch) => {
        return auth.sendPasswordResetEmail(email)
        .then(() => {
            history.push(routes.SIGN_IN)
        })
        .catch((error) => {
            dispatch(addNotification('error', error.message))
            console.error('Error resetting password: ', error)
        })
    }
}

// Do password change on user
export function changePassword(currentPassword, newPassword) {
    return (dispatch) => {

        // Firebase requires the user to be reauthenticated before changing password
        const reauthenticate = (currentPassword) => {
            const user = auth.currentUser
            const cred = emailAuthProvider.credential(user.email, currentPassword)
            return user.reauthenticateAndRetrieveDataWithCredential(cred)
        }

        reauthenticate(currentPassword)
            .then(() => {
                const user = auth.currentUser
                user.updatePassword(newPassword)
                    .then(() => {
                        dispatch(addNotification('success', 'Your password has successfully been changed.'))
                        history.push(routes.ACCOUNT)
                    })
                    .catch((error) => {
                        dispatch(addNotification('error', error.message))
                        console.error('Error changing password: ', error)
                    })
            })
            .catch((error) => {
                dispatch(addNotification('error', error.message))
                console.error('Error reauthenticating user: ', error)
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

export function setUserDetails(details) {
    return {
        type: 'SET_USER_DETAILS',
        details
    }
}
