import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  // .navbar {
  //   background-color: #222;
  // }

  // navbar-brand, .navbar-nav .nav-link {
  //   color: #bbb;

  //   &:hover {
  //     color: white;
  //   }
  // }
`;

export const NavBar = () => (
  <Styles>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">ProductApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/catalog">Catalog</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
)