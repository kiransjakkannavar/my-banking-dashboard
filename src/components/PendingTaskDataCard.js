// src/components/PendingTaskData.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PendingTaskDataCard() {
  return (
    <Container fluid className="d-flex">
      <Row className="w-100">
        <Col className="p-2" style={{ height: "200px" }}>
          <div className="bg-light h-100 d-flex justify-content-center align-items-center">
            <div>
              <strong>687</strong>
              <br /> Pending send to bank
            </div>
          </div>
        </Col>
        <Col className="p-2" style={{ height: "200px" }}>
          <div className="bg-light h-100 d-flex justify-content-center align-items-center">
            <div>
              <strong>8</strong>
              <br /> Pending Repairs
            </div>
          </div>
        </Col>
        <Col className="p-2" style={{ height: "200px" }}>
          <div className="bg-light h-100 d-flex justify-content-center align-items-center">
            <div>
              <strong>830</strong>
              <br /> Pending Authorization
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PendingTaskDataCard;
