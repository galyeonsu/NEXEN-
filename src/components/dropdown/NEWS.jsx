import { useState } from 'react';
import { Button, Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NEWS() {
    return (
      <NavDropdown title="NEWS&EVENT" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">뉴스</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          이벤트
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">웹진</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
  
  export default NEWS;
