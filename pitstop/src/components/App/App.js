import Main from '../Main/Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'

import './App.css'

function mapStateToProps(state) {
    return {
        vehicles: state.vehicles,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

// Connect Main component to react
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App
