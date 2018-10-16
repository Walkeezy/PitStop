import React, {Component} from 'react'

import VehicleSwitch from '../Vehicle/VehicleSwitch'
import VehicleLog from '../Vehicle/VehicleLog'

class HomePage extends Component {

    render() {

        return (
            <div>
                <h1>Home Page</h1>

                <VehicleSwitch {...this.props}/>

                <VehicleLog {...this.props}/>

            </div>
        )
    }
}

export default HomePage
