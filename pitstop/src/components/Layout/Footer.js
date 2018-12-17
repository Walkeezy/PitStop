import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Icon from './Icons'

class Footer extends Component {
    render() {
        return (

            <footer>
                <div className="footer__content">
                    <NavLink to={routes.ACCOUNT} title="View your account" className="footer__button" activeClassName="footer__button--active"><Icon name="user" width="32px" fill='#FFF' /></NavLink>
                    {
                        Object.keys(this.props.vehicles.vehicles).length
                            ? <Link to={routes.ADD_EVENT} title="Add new event" className="footer__button add-event-button"><Icon name="plus" width="40px" fill='#FFF' /></Link>
                            : null
                    }
                    <NavLink to={routes.STATISTIC} title="View your statistics" className="footer__button" activeClassName="footer__button--active"><Icon name="statistic" width="48px" fill='#FFF' /></NavLink>
                </div>
            </footer>

        )
    }
}

export default Footer
