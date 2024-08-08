import React from "react";
import { Container } from "react-bootstrap";
import Cardheader from "./Cardheader";

const PaymentApprovalCard = () => {
  return (
    <>
      <Cardheader text="PAYMENT - PENDING APPROVAL" />
      <Container className="mt-3">
        <p className="mb-2">
          <strong>Q0022706</strong> | Cut off time 2 hrs from now
        </p>
        <p>KRW 701</p>
      </Container>
    </>
  );
};

export default PaymentApprovalCard;
