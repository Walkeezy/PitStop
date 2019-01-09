import Main from '../Main/Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './../../redux/actions'
import { withRouter } from 'react-router'

// Get state from store and map it to props
function mapStateToProps(state) {
    return {
        user: state.userState,
        vehicles: state.vehicleState,
        events: state.eventState,
        error: state.errorState
    }
}

// Bind all actions to props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

// Connect Main component to react
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App
