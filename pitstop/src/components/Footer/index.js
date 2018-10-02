import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Icon from '../Icons';

import './footer.css';

class Footer extends Component {
  render() {
    return (

      <footer>
        <div className="footer__content">
          <Link to={routes.ACCOUNT}><Icon name="user" width="32px" fill='#FFF' /></Link>
          <Link to={routes.ADD_EVENT}>New event</Link>
          <Link to={routes.STATISTIC}><Icon name="statistic" width="48px" fill='#FFF' /></Link>
        </div>
      </footer>

    )
  }
}

export default Footer;