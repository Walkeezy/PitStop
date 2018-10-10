import {combineReducers} from 'redux'
import sessionReducer from './reducers/session'
import userReducer from './reducers/user'
import vehicleReducer from './reducers/vehicle'

const rootReducer = combineReducers({
    sessionState    : sessionReducer,
    userState       : userReducer,
    vehicleState    : vehicleReducer
});

export default rootReducer;
