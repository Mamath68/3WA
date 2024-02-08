import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Layout({ children }) {
  return (
    <>
      <Nav variant="pills" className="bg-dark">
        <Nav.Item>
          <Nav.Link as={Link} to="/" className="link-light">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about" className="link-light">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/calculatrice" className="link-light">
            Calculatrice
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/calendrier" className="link-light">
            Calendrier
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <main className="container mt-3">{children}</main>
    </>
  );
}

export default Layout;
