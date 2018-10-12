import { database, auth } from '../database/config'

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
        return auth.signInWithEmailAndPassword(user.email, user.password).then(authUser => {
            console.log('eingeloggt!')
            // dispatch(setUser(user))
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

// Load vehicles from database, then dispatch loadVehicles action
export function startLoadingVehicles() {
    console.log('currentUser: ' + auth.currentUser)
    return (dispatch) => {
        return database.ref(`users/rjlehzKT0tW0yYSRpuC4YUUllqV2/vehicles`).once('value').then((snapshot) => {
            let vehicles = {}
            snapshot.forEach((childSnapshot) => {
                vehicles[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadVehicles(vehicles))
        })
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

export function addVehicle(vehicle) {
    return {
        type: 'ADD_VEHICLE',
        vehicle: vehicle
    }
}

export function loadVehicles(vehicles) {
    return {
        type: 'LOAD_VEHICLES',
        vehicles: vehicles
    }
}
