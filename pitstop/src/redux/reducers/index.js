import { combineReducers } from 'redux'
import userReducer from './user'
import vehicleReducer from './vehicle'
import eventReducer from './event'

const rootReducer = combineReducers({
    userState: userReducer,
    vehicleState: vehicleReducer,
    eventState: eventReducer
})

export default rootReducer
