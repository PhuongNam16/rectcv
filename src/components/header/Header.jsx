import React from 'react';
import logo from '../../logo.svg';
import {Navbar} from 'react-bootstrap';
import './Header.css';
const Header = () => {
  return (
    <div className ="preview-header">
      <Navbar bg="dark" className="navbar-header" fixed="top" >
        <div className="preview_logo">
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="152"
              height="28"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </div>
        <div className="preview_btn">
          <Navbar.Brand style ={{color: '#fff'}} href="#" className="btn-buy">
            Buy Now
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
