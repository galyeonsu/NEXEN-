import { useState } from 'react';
import { Button, Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function INVESTORRESLATIONS() {
    return (
      <NavDropdown title="INVESTOR RESLATIONS" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">공시/공고</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          재무정보
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">주주정보</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
  
  export default INVESTORRESLATIONS;
