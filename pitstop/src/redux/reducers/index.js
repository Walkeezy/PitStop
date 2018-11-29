import { combineReducers } from 'redux'
import userReducer from './user'
import vehicleReducer from './vehicle'
import eventReducer from './event'
import statisticReducer from './statistic'

const rootReducer = combineReducers({
    userState: userReducer,
    vehicleState: vehicleReducer,
    eventState: eventReducer,
    statisticState: statisticReducer
})

export default rootReducer
