// src/components/Workflow.js

import React from "react";
import { ArrowRepeat } from "react-bootstrap-icons";
import WorkflowBarChart from "./WorkFlowBarChart";
import Cardheader from "./Cardheader";

const PaymentWorkFlowCard = () => {
  return (
    <>
      <Cardheader
        text="PAYMENT IN LAST 7 DAYS (MY VIEW)"
        icon={true}
        iconName="FUNNEL"
      />
      <div className="workflow-class">
        <WorkflowBarChart />
        <footer
          className="footer d-flex align-items-center gap-2 text-muted"
          style={{ marginTop: "-10px", fontSize: "12px" }}
        >
          <ArrowRepeat />
          Last Updated 04/08/2024 04:09:41 PM
        </footer>
      </div>
    </>
  );
};

export default PaymentWorkFlowCard;
