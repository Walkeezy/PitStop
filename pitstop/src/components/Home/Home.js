import React, {Component} from 'react'

import Header from '../Layout/Header'
import VehicleSwitch from '../Vehicle/VehicleSwitch'
import EventLog from '../Event/EventLog'
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';

class HomePage extends Component {

    render() {
            return (

                <div className="page">
                    <Header/>
                    <div className="content">
                        {Object.keys(this.props.vehicles.vehicles).length ? (
                            <div>
                                <VehicleSwitch {...this.props} />
                                <EventLog {...this.props} />
                            </div>
                        ) : (
                            <div>No vehicles found. <Link to={routes.ADD_VEHICLE}>Go and add one!</Link></div>
                        )}
                    </div>
                </div>

            )
    }
}

export default HomePage
