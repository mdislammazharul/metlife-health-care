import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="nav-color" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container style={{ color: 'white' }}>
                    <Navbar.Brand href="#home">MetLife Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="header justify-content-end">
                        <HashLink className="me-3" to="/home#home">Home</HashLink>
                        <HashLink className="me-3" to="/home#services">Services</HashLink>
                        <HashLink className="me-3" to="/home#doctors">Specialist</HashLink>
                        <HashLink className="me-3" to="/home#hacks">Health Hacks</HashLink>
                        <HashLink className="me-3" to="/live">Live Consultancy</HashLink>
                        <HashLink className="me-3" to="/donate">Donate Us</HashLink>
                        <HashLink className="me-3" to="/tips">Live Health Tips</HashLink>
                        {user?.displayName && <Navbar.Text>
                            Signed in as: <a className="me-3" href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                        {
                            user?.displayName ?
                                <button onClick={logOut} className="btn btn-light">LogOut</button> :
                                <HashLink to="/login">Login</HashLink>
                        }
                    </Navbar.Collapse >
                </Container >
            </Navbar >
        </div >
    );
};

export default Header;