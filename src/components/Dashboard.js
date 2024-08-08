import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Megaphone } from "react-bootstrap-icons";
import Header from "./Header";
import PaymentApprovalCard from "./PaymentApprovalCard";
import PendingTaskCard from "./PendingTaskCard";
import PriorityMessageCard from "./PriorityMessageCard";
import PaymentWorkFlowCard from "./PaymentWorkFlowCard";
import QuickNavigation from "./QuickNavigationCard";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="mb-3 ms-3 mt-3">
        <Button variant="primary" size="lg" style={{ width: "110px" }}>
          Home
        </Button>
      </div>

      <div
        className="bg-primary text-white position-absolute"
        style={{
          right: "-41px",
          top: "250px",
          transform: "rotate(-90deg)",
          padding: "5px",
        }}
      >
        <Megaphone style={{ transform: "rotate(-90deg)" }} />
        Give Feedback
      </div>

      <Container fluid className="px-4">
        <Row className="justify-content-around align-items-start h-100">
          <Col
            className="d-flex flex-column align-items-center py-2"
            xs={12}
            md={4}
          >
            <div className="border mb-3 w-100" style={{ height: "140px" }}>
              <PaymentApprovalCard />
            </div>
            <div className="border w-100" style={{ height: "300px" }}>
              <PendingTaskCard />
            </div>
          </Col>
          <Col
            className="d-flex flex-column align-items-center py-2"
            xs={12}
            md={4}
          >
            <div className="border mb-3 w-100" style={{ height: "150px" }}>
              <PriorityMessageCard />
            </div>
            <div className="border w-100" style={{ height: "350px" }}>
              <PaymentWorkFlowCard />
            </div>
          </Col>
          <Col
            className="border py-2"
            xs={12}
            md={4}
            style={{ height: "350px" }}
          >
            <QuickNavigation />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
