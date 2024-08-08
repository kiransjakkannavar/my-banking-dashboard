import React from "react";
import Cardheader from "./Cardheader";
import { ArrowRepeat } from "react-bootstrap-icons";
import PendingTaskButton from "./PendingTaskButton";

const PendingTaskCard = () => {
  return (
    <>
      <Cardheader text={"1555 - PENDING TASK"} />
      <div className="pending-task">
        <PendingTaskButton />
        <footer
          className="footer d-flex align-items-center gap-2 text-muted mt-3"
          style={{ fontSize: "12px" }}
        >
          <ArrowRepeat />
          Last Updated 04/08/2024 04:09:41 PM
        </footer>
      </div>
    </>
  );
};

export default PendingTaskCard;
