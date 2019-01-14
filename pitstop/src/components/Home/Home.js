import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Header from '../Layout/Header'
import VehicleSwitch from '../Vehicle/VehicleSwitch'
import EventLog from '../Event/EventLog'
import Icon from '../Layout/Icons'

class HomePage extends Component {

    constructor() {
        super()
        this.handleRemoveNotification = this.handleRemoveNotification.bind(this)
    }

    handleRemoveNotification(event) {
        event.preventDefault();
        this.props.removeNotification()
    }

    render() {
        return (

            <div className="page">
                <Header/>

                {this.props.notifications.active &&
                    <div className={'notification notification--standalone notification--' + this.props.notifications.type}>
                        <p>{this.props.notifications.message}</p>
                        <button className="hide-notification" onClick={this.handleRemoveNotification}><Icon name="plus" width="18px" fill='#FFF' /></button>
                    </div>
                }

                {Object.keys(this.props.vehicles.vehicles).length ? (
                    <React.Fragment>
                        <div className="content">
                            <VehicleSwitch {...this.props} />
                        </div>
                        <div className="content">
                            <EventLog {...this.props} />
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="content">No vehicles found. <Link to={routes.ADD_VEHICLE}>Go and add one!</Link></div>
                )}
            </div>

        )
    }

    componentWillUnmount() {
        this.props.removeNotification()
    }
}

export default HomePage
