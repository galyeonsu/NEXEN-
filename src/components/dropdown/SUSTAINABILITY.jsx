import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SUSTAINABILITY() {
    return (
      <NavDropdown title="SUSTAINABILITY" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">지속가능경영체계</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
        사람
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">환경</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
  
  export default SUSTAINABILITY;
