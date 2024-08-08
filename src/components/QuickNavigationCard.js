import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { ExclamationCircle } from "react-bootstrap-icons";
import Cardheader from "./Cardheader";

const QuickNavigation = () => {
  const items = [
    {
      title: "Create Payments",
      description: "Make a new domestic or international payment",
    },
    {
      title: "Create Payee",
      description: "Create a new beneficiary with details to receive payment",
    },
    {
      title: "View Account Balance",
      description: "View balance and details of your account",
    },
    {
      title: "Manage Reports",
      description: "View schedule and run reports",
    },
  ];

  return (
    <Container>
      <Cardheader text="QUICK NAVIGATION" />
      <div className="navigation-class p-3">
        <ListGroup variant="flush">
          {items.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-start"
            >
              <div>
                <div className="fw-bold">{item.title}</div>
                <div className="text-muted">{item.description}</div>
              </div>
              <ExclamationCircle className="text-muted" />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default QuickNavigation;
