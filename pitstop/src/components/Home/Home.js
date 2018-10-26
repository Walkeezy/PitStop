import React, {Component} from 'react'

import Header from '../Layout/Header'
import VehicleSwitch from '../Vehicle/VehicleSwitch'
import EventLog from '../Event/EventLog'

class HomePage extends Component {

    render() {
        return (

            <div className="page">
                <Header />
                <div className="content">
                    <VehicleSwitch {...this.props} />
                </div>
                <div className="content">
                    <EventLog {...this.props} />
                </div>
            </div>

        )
    }
}

export default HomePage
