import { combineReducers } from 'redux'
import userReducer from './user'
import vehicleReducer from './vehicle'
import eventReducer from './event'
import errorReducer from './error'

const rootReducer = combineReducers({
    userState: userReducer,
    vehicleState: vehicleReducer,
    eventState: eventReducer,
    errorState: errorReducer
})

export default rootReducer
