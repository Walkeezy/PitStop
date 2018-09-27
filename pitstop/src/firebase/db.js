import {db} from './firebase';


// User API

export const doCreateUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email,
    });

export const onceGetUsers = () =>
    db.ref('users').once('value');

export const doCreateVehicle = (id, vehicleName, brand, mark, date, mileage, tyres) =>
    db.ref(`users/${id}/vehicles`).push({
        vehicleName,
        brand,
        mark,
        date,
        mileage,
        tyres,
        events: ''
    });


export const onceGetVehicles = (id) =>
    db.ref(`users/${id}/vehicles`).once('value');