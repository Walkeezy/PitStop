import React, {Component} from 'react'

import VehicleSwitch from '../Vehicle/VehicleSwitch'
import VehicleLog from '../Vehicle/VehicleLog'
import entries from '../../fakedata/logentries'

class HomePage extends Component {

    componentDidMount() {

    }

    render() {
        const {vehicles} = this.props;

        return (
            <div>
                <h1>Home Page</h1>

                {!!vehicles && <VehicleSwitch vehicles={vehicles}/>}

                <VehicleLog entries={entries}/>

            </div>
        )
    }
}

export default HomePage
