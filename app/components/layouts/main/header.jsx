import React from 'react';
import { Navbar, FormControl } from 'react-bootstrap/lib';

import Menu from './menu';
import LogoImg from './images/expo-logo.png';

const Header = () => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle>
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </Navbar.Toggle>
      <Navbar.Brand>
        <a href="/search" className="navbar-brand-logo">
          <img src={LogoImg} className="img-responsive" alt="Exponential-e" />
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Menu />
      <form className="navbar-form navbar-right">
        <FormControl
          type="text"
          placeholder="Search..."
        />
      </form>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
