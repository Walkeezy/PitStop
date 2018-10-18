import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Icon from './Icons'

class Header extends Component {
    render() {
        return (

            <header>
                <Link className="header__home-link" to={routes.HOME}><Icon name="logo" width="107" /></Link>
            </header>

        )
    }
}

export default Header
