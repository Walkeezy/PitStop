import React, { Component } from 'react'
import { withRouter } from 'react-router'
import * as routes from '../../constants/routes'
import Header from './../Layout/Header'
import VehicleForm from './VehicleForms/Vehicle'

class EditVehiclePage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Edit vehicle" backLink={routes.ACCOUNT} />
                <div className="box">
                    {this.props.notifications.active &&
                        <div className={'notification notification--' + this.props.notifications.type}>
                            <p>{this.props.notifications.message}</p>
                        </div>
                    }
                    <div className="box__content">
                        <VehicleForm editVehicleId={this.props.match.params.id} {...this.props} />
                    </div>
                </div>
            </div>

        )
    }
}

// Needs to be withRouter to get url params
export default withRouter(EditVehiclePage)
