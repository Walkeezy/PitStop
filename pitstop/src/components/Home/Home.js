import React, {Component} from 'react'

import Header from '../Layout/Header'
import EventLog from '../Event/EventLog'

class HomePage extends Component {

    render() {
        return (

            <div className="page">
                <Header />
                <div className="content-box">
                    <EventLog {...this.props} />
                </div>
            </div>

        )
    }
}

export default HomePage
