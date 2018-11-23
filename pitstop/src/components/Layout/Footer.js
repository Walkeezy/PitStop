import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Icon from './Icons'

class Footer extends Component {
    render() {
        return (

            <footer>
                <div className="footer__content">
                    <Link to={routes.ACCOUNT} title="View your account" className="footer__button"><Icon name="user" width="32px" fill='#FFF' /></Link>
                    {
                        Object.keys(this.props.vehicles.vehicles).length
                            ? <Link to={routes.EVENT_TYPE} title="Add new event" className="footer__button add-event-button"><Icon name="plus" width="40px" fill='#FFF' /></Link>
                            : null
                    }
                    <Link to={routes.STATISTIC} title="View your statistics" className="footer__button"><Icon name="statistic" width="48px" fill='#FFF' /></Link>
                </div>
            </footer>

        )
    }
}

export default Footer
