import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import './header.css';

const Header = () =>
  <header>
    <h1><Link to={routes.HOME}>PitStop</Link></h1>
  </header>

export default Header;