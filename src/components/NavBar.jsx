import { useState } from 'react';
import { Button, Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImSearch } from "react-icons/im";
import PRODUCT from './dropdown/PRODUCT';
import SERVICE from './dropdown/SERVICE';
import COMMUNICATION from './dropdown/COMMUNICATION';
import NEWS from './dropdown/NEWS';
import NEXNTIRE from './dropdown/NEXNTIRE';
import SUSTAINABILITY from './dropdown/SUSTAINABILITY';
import INVESTORRESLATIONS from './dropdown/INVESTOR RESLATIONS';
import '.././App.css'

function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='NB'>
    <Navbar expand="lg" className="bg-body-tertiary" style={{background:'black'}} >
      <Container>
        <Navbar.Brand href="#home" className=''> NEXNTIRE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ml-auto ">
            <Nav.Link href="#home"><PRODUCT/></Nav.Link>
            <Nav.Link href="#link"><SERVICE/></Nav.Link>
            <Nav.Link href="#link"><COMMUNICATION/></Nav.Link>
            <Nav.Link href="#link"><NEWS/></Nav.Link>
            <Nav.Link href="#link">< NEXNTIRE/></Nav.Link>
          
            {/* <Nav.Link href="#link"><SUSTAINABILITY/></Nav.Link>
            <Nav.Link href="#link"><INVESTORRESLATIONS/></Nav.Link> */}
           
            <Nav className='ml-auto '>
            <Nav.Link href="#link" className="me-2"><small>login</small></Nav.Link>
            <Nav.Link href="#link" className="me-2"><small>Membership</small></Nav.Link>
            <Nav.Link href="#link" className="me-2"><small>Global Site</small></Nav.Link>
            <Nav.Link href="#link" className="me-2"><ImSearch /></Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default NavBar;
