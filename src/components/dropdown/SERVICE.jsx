import { useState } from 'react';
import { Button, Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SERVICE() {
    return (
      <NavDropdown title="SERVICE" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">내차에맞는타이어</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          판매점찾기
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">보증제도안내</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
  
  export default SERVICE;
