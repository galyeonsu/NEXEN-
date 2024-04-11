import { useState } from 'react';
import { Button, Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PRODUCT() {
    return (
      <NavDropdown title="PRODUCT" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">승용차용</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
       suv용
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">전기차용</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
  
  export default PRODUCT;
