import React from 'react';
// import logo from '../../logo.svg';
import { AiOutlineMenu } from 'react-icons/all';
import {Nav, Navbar} from 'react-bootstrap';
import './Header.css';
const Header = () => {
  return (
    <div className="header-area">
    <Navbar className="container" activeKey="/home">
      <Navbar.Brand href="#">
        <div className="logo-area">
          <h1 className="text-center">Rect<span>CV</span></h1>
        </div>
      </Navbar.Brand>
      <Nav className="container justify-content-end">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            Protfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">
            Resume
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <AiOutlineMenu className="toggle-menu"/>
    </Navbar>
    </div>
  );
};

export default Header;
