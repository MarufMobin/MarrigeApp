import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <Navbar className="bg-coustom" sticky="top"  variant="dark">
            <Container>
            <Navbar.Brand href="#home">Wedding Ceremony</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing"><u><b>Events</b></u></Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;