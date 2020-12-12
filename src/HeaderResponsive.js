import React from 'react';
import './HeaderResponsive.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeaderResponsive() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" style ={{padding: '0', backgroundColor: '#131921'}} > 
                <Navbar.Brand href="#home"><img className='header__logo' src= 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt = 'logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info" style={{ color:'#111', backgroundColor: '#cd9042', border: '#cd9042' }}><SearchIcon fontSize='default' /></Button>
                    </Form>
                    </Nav>
                    <Nav className="ml-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderResponsive
