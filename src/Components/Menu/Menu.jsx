import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import './menu.css'
import Logo from "../../assets/Menu part.png"

const Menu = () => {
    return (
        <Navbar expand="lg" className="menu_bg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='optn' href="#home">Home</Nav.Link>
                        <Nav.Link className='optn' href="#link">Product</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu
