import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSignIn from '../../Hooks/useSignIn';
import { signOut } from 'firebase/auth';
import './Header.css'
import auth from '../../FireBase/firebase.init';

const Header = () => {

  const { user } = useSignIn()

  return (
    <div className='nav-container-parent'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className='fs-3 fw-bold' href="#home">X-PIXEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navigation-link-container">
            <Nav.Link as={Link} to={'/'} href="#features" className='fw-bold fs-5'>Home</Nav.Link>
            <Nav.Link as={Link} to={'/checkout'} className='fw-bold fs-5'>Checkout</Nav.Link>
            <Nav.Link as={Link} to={'/blog'} className='fw-bold fs-5'>Blogs</Nav.Link>
            <Nav.Link as={Link} to={'/about'} className='fw-bold fs-5'>About</Nav.Link>
            {
              !user ? <Nav.Link as={Link} to={'/signin'} className='fw-bold fs-5'>Sign-in</Nav.Link> : <Nav.Link onClick={() => signOut(auth)} className='fw-bold fs-5'>Sign-out</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;