import { combineReducers } from 'redux'
import userReducer from './user'
import vehicleReducer from './vehicle'
import vehiclelogReducer from './vehiclelog'

const rootReducer = combineReducers({
    userState: userReducer,
    vehicleState: vehicleReducer,
    vehiclelogState: vehiclelogReducer
})

export default rootReducer
