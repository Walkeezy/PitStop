import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Header from '../Layout/Header'

class NotFoundPage extends Component {

    render() {
        return (

            <div className="page">
                <Header title="Page not found" backButton="false" />
                <div className="box">
                    <div className="box__content text-align--center">
                        <p>Oh no, the page you are looking for can not be found.</p>
                        <Link className="button" to={routes.HOME}>Go to home page</Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default NotFoundPage
