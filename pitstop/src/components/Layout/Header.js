import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Icon from './Icons'

class Header extends Component {
    render() {

        if(this.props.title){
            const backlink = this.props.backLink || routes.HOME
            return (

                <header>
                    <div className="header__content">
                        {this.props.backButton !== 'false' && <Link className="header__back-link" to={backlink}><Icon name="back" width="18" /></Link>}
                        <h1 className="header__title">{this.props.title}</h1>
                    </div>
                </header>

            )
        } else {
            return (

                <header>
                    <div className="header__content">
                        <Link className="header__home-link" to={routes.HOME}><Icon name="logo" width="107" /></Link>
                    </div>
                </header>

            )
        }

    }
}

export default Header
