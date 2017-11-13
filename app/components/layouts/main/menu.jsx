import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({ authenticated }) => (
  <ul className="nav navbar-nav navbar-right">
    {!authenticated &&
    <li><NavLink exact to="/">Home</NavLink></li>
    }
    {authenticated &&
    <li><NavLink to="/products">Products</NavLink></li>
    }
    {!authenticated &&
    <li><NavLink to="/login">Login</NavLink></li>
    }
    {authenticated &&
    <li><NavLink to="/logout">Logout</NavLink></li>
    }
    {/* <NavItem eventKey={3} href="#">Settings</NavItem>
    <NavItem eventKey={4} href="#">Profile</NavItem>
    <NavItem eventKey={5} href="#">Help</NavItem> */}
  </ul>
);

Menu.propTypes = {
  authenticated: PropTypes.bool,
};

Menu.defaultProps = {
  authenticated: false,
};


const mapStateToProps = state =>
  ({ authenticated: state.auth.authenticated });

export default connect(mapStateToProps)(Menu);
