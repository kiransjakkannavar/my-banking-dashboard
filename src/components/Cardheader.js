import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Funnel, ArrowsAngleExpand } from "react-bootstrap-icons";

const Cardheader = ({ text, icon = false, iconName = "" }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "FUNNEL":
        return <Funnel />;
      case "EXPAND":
        return <ArrowsAngleExpand />;

      default:
        return null;
    }
  };
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      className="justify-content-start"
      style={{ height: "40px", fontWeight: "normal" }}
    >
      <Container>
        <Navbar.Brand className="ms-2 display-6">
          {text} {""} {icon ? getIcon(iconName) : null}{" "}
          {icon ? getIcon("EXPAND") : null}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Cardheader;
