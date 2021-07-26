import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//Creating Class Component
// Navigation (Navbar Link)

class NavBarManu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Survey Page</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home Page </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/list">List Page </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="/create">Create Page </Link>
              </Nav.Link> */}
              {localStorage.getItem("login") ? (
                <Nav.Link href="#link">
                  <Link to="/logout">Logout </Link>
                </Nav.Link>
              ) : (
                <Nav.Link href="#link">
                  <Link to="/login">Login </Link>
                </Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBarManu;
