import React from 'react'
// import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar { background-color: #41545E; }
a, .navbar-nav, .navbar-light .nav-link {
color: #99CAC9;
font-weight: 800;
&:hover { color: orange; }
}
`;

const NavigationBar = props => {

    return (
    <Styles>
    <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/contact">Contact Me</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Styles>
    )
}

export default NavigationBar