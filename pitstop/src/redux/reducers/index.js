import { combineReducers } from 'redux'
import userReducer from './user'
import vehicleReducer from './vehicle'
import eventReducer from './event'
import notificationReducer from './notification'

const rootReducer = combineReducers({
    userState: userReducer,
    vehicleState: vehicleReducer,
    eventState: eventReducer,
    notificationState: notificationReducer
})

export default rootReducer
