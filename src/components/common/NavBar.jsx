import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar className='NavBar'>
            <Container>
                <Link 
                    to={'/'}
                    className='navlink'
                    >
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
                </Link>
                <Navbar.Collapse className='justify-content-end'>
                    <Link 
                        className='navlink m-2'
                        to={'/clothes/new'}>
                        New Cloth
                    </Link>
                    {/* <Link 
                        className='navlink m-2'
                        to={'/outfits'}>
                        Outfits
                    </Link> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
