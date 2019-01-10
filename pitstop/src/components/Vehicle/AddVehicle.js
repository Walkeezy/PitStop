import React, {Component} from 'react'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import VehicleForm from './VehicleForms/Vehicle'

class AddVehiclePage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Add new vehicle" backLink={routes.ACCOUNT} />
                <div className="box">
                    {this.props.notifications.active &&
                        <div className={'notification notification--' + this.props.notifications.type}>
                            <p>{this.props.notifications.message}</p>
                        </div>
                    }
                    <div className="box__content">
                        <VehicleForm {...this.props} />
                    </div>
                </div>
            </div>

        )
    }
}

export default AddVehiclePage
