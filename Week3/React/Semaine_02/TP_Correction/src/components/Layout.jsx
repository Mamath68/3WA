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
          <Nav.Link as={Link} to="/contact" className="link-light">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/blog" className="link-light">
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/users" className="link-light">
            List Users
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <main className="container mt-3">{children}</main>
    </>
  );
}

export default Layout;
