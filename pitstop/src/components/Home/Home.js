import React, {Component} from 'react'

import Header from '../Layout/Header'
import VehicleSwitch from '../Vehicle/VehicleSwitch'
import VehicleLog from '../Vehicle/VehicleLog'

class HomePage extends Component {

    render() {
        return (

            <div className="page">
                <Header />
                <div className="page__content">
                    <VehicleSwitch {...this.props} />
                    <VehicleLog {...this.props} />
                </div>
            </div>

        )
    }
}

export default HomePage
