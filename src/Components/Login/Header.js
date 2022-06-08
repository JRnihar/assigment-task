import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand> <img style={{ width: '100px' }} src="https://thevouch.digital/wp-content/uploads/2020/10/Group-1-2.png" alt=""  /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto align-items-center my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to='/trial'><button className='btn btn-outline-dark'>Get a Free Trail</button></Nav.Link>
                        <Nav.Link as={NavLink} to='/'><button className='btn btn-outline-dark'>Login / Register</button></Nav.Link>
                       </Nav>
                      
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;