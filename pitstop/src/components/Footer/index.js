import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import Icon from '../Icons';

import './footer.css';

const Footer = () =>
  <footer>
    <div className="footer__content">
      <Link to={routes.ACCOUNT}><Icon name="user" width="32px" fill='#FFF' /></Link>
      <Link to={routes.ADD_VEHICLE}>New event</Link>
      <Link to={routes.HOME}><Icon name="statistic" width="48px" fill='#FACF5A' /></Link>
    </div>
  </footer>

export default Footer;