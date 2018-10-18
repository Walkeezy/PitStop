import Main from '../Main/Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './../../redux/actions'
import { withRouter } from 'react-router'

import './App.css'

// Get state from store and map it to props
function mapStateToProps(state) {
    return {
        user: state.userState,
        vehicles: state.vehicleState,
        logentries: state.vehiclelogState
    }
}

// Bind all actions to props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

// Connect Main component to react
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App
