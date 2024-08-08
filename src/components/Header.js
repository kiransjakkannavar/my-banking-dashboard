// src/components/HeaderMain.js

import React from "react";
import { Navbar, Nav, Button, Badge, Image, Container } from "react-bootstrap";
import { House, Bell, List, PersonCircle } from "react-bootstrap-icons";
import Standard from "../images/standard.svg";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" style={{ height: "50px" }}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <List
            className="me-2"
            style={{ fontSize: "1.5rem", color: "#ffffff" }}
          />
          <span style={{ color: "#ffffff" }}>Menu</span>
        </Navbar.Brand>
        <Nav className="me-auto d-flex align-items-center">
          <Nav.Link href="#home" className="d-flex align-items-center">
            <House
              className="me-2"
              style={{ fontSize: "1.5rem", color: "#ffffff" }}
            />
            <span>Straight2Bank</span>
          </Nav.Link>
          <Image
            src={Standard}
            alt="Bank Logo"
            style={{ height: "30px", width: "auto", margin: "0 15px" }}
          />
          <Button
            variant="outline-light"
            className="d-flex align-items-center me-2"
          >
            <PersonCircle style={{ fontSize: "1.5rem" }} />
          </Button>
          <span className="text-white me-3">Welcome SITUSR01</span>
          <span className="text-white me-3">Group Id: KRISTEE01</span>
        </Nav>
        <Badge pill className="me-3">
          <Bell style={{ fontSize: "1.5rem" }} />
          <Badge pill bg="danger" className="position-absolute">
            17
          </Badge>
        </Badge>
        <Button>Logout</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
