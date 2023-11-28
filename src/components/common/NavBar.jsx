import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar className=''>
            <Container>
                <Navbar.Brand className=''>
                    <Container className='border-end border-black border-2'>
                        <span className='d-flex justify-content-end font-playfair-display fs-4'>
                            Fitmaster 
                        </span>
                        <span className='d-flex justify-content-end'>
                            Unleash your Fashion
                        </span>
                    </Container>
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav.Link className='p-2'>
                        <Link 
                            className='navlink'
                            to={'/clothes/new'}>
                            New Cloth
                        </Link>
                    </Nav.Link>
                    <Nav.Link className='p-2'>
                    <Link 
                            className='navlink'
                            to={'/outfits'}>
                            Outfits
                    </Link>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
