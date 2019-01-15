import React, { Component } from 'react'
import { withRouter } from 'react-router'
import * as routes from '../../constants/routes'
import Header from './../Layout/Header'
import EventForm from './EventForm'

class EditEventPage extends Component {

    render() {
        const loadingEventData = this.props.events.loading

        if (loadingEventData) {

            return (

                <div className="page">
                    <Header title="Edit event" backLink={routes.HOME} />
                    <div className="bouncing-loader">
                        <div className="bouncing-loader__dot bouncing-loader__dot--blue"></div>
                        <div className="bouncing-loader__dot bouncing-loader__dot--blue"></div>
                        <div className="bouncing-loader__dot bouncing-loader__dot"></div>
                    </div>
                </div>

            )

        } else {

            return (

                <div className="page">
                    <Header title="Edit event" backLink={routes.HOME} />
                    <div className="box">
                        {this.props.notifications.active &&
                            <div className={'notification notification--' + this.props.notifications.type}>
                                <p>{this.props.notifications.message}</p>
                            </div>
                        }
                        <div className="box__content">
                            <EventForm editEventId={this.props.match.params.id} {...this.props} />
                        </div>
                    </div>
                </div>

            )

        }
    }
}

// Needs to be withRouter to get url params
export default withRouter(EditEventPage)
