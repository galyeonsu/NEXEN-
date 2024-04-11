import { useState } from 'react';
import { Button, Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NEXNTIRE() {
    return (
      <NavDropdown title="NEXNTIRE" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">기업정보</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          채용정보
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">찾아오시는길</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
  
  export default NEXNTIRE;
