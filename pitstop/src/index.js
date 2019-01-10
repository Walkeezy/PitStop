import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { history } from './history'
import App from './components/App/App'
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker'

import './styles/main.css'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker()
