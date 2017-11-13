import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './header';

import './index.css';
import './header.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Layout;
