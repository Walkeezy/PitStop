import React, {Component} from 'react'
import {withRouter} from 'react-router'
import * as routes from '../../constants/routes'

import Header from './../Layout/Header'
import VehicleForm from './VehicleForm'

class EditVehiclePage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Edit vehicle" backLink={routes.ACCOUNT} />
                <div className="page__content">
                    <VehicleForm editVehicleId={this.props.match.params.id} {...this.props} />
                </div>
            </div>

        )
    }
}

// Needs to be withRouter to get url params
export default withRouter(EditVehiclePage)
