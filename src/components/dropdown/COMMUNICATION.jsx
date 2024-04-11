import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function COMMUNICATION() {
    return (
      <NavDropdown title="COMMUNICATION" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">브랜드소개</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
        스포츠마케팅
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">모터스포츠</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
  
  export default COMMUNICATION;
