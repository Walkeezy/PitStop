import { database, auth } from '../database/config'

// Create user on firebase, then save user to database, then dispatch setUser action
export function startAddingUser(user) {
    return (dispatch) => {
        return auth.createUserWithEmailAndPassword(user.email, user.password).then(authUser => {
            database.ref(`users/${authUser.user.uid}`).set({
                username: user.username,
                email: user.email
            }).then(() => {
                dispatch(setUser(user))
            })
        }).catch((error) => {
            alert(error)
        })
    }
}

// Sign in user on firebase, then dispatch setUser action
export function startLoginUser(user) {
    return (dispatch) => {
        return auth.signInWithEmailAndPassword(user.email, user.password).then(authUser => {
            console.log('eingeloggt!')
            dispatch(setUser(user))
        }).catch((error) => {
            alert(error)
        })
    }
}

// Sign out user on firebase
export function signOutUser() {
    return (dispatch) => {
        return auth.signOut().then(() => {
            console.log('ausgeloggt!')
        }).catch((error) => {
            alert(error)
        })
    }
}

// Save vehicle to current user in database, then dispatch addVehicle action
export function startAddingVehicle(vehicle) {
    return (dispatch) => {
        return database.ref(`users/${auth.currentUser.uid}/vehicles`).push(vehicle).then(() => {
            dispatch(addVehicle(vehicle))
        }).catch((error) => {
            alert(error)
        })
    }
}

export function setUser(user) {
    return {
        type: 'SET_USER',
        user: user
    }
}

export function addVehicle(vehicle) {
    return {
        type: 'ADD_VEHICLE',
        vehicle: vehicle
    }
}
