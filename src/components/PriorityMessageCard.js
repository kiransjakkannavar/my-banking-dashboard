// src/components/Bill.js

import React from "react";
import { Container } from "react-bootstrap";
import Cardheader from "./Cardheader";

const PriorityMessageCard = () => {
  return (
    <>
      <Cardheader text="PRIORITY MESSAGE" />
      <Container className="mt-2">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ margin: "10px" }}
        >
          <h6 className="mb-0">Bill Payments Report - Korea Bill</h6>
          <a href="www.google.com" target="_blank">
            All messages
          </a>
        </div>
      </Container>
    </>
  );
};

export default PriorityMessageCard;
