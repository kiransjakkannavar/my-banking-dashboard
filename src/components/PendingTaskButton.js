// src/components/PendingTaskButton.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Container } from "react-bootstrap";
import PendingTaskDataCard from "./PendingTaskDataCard";

function CustomTabPanel(props) {
  const { children, eventKey, activeKey } = props;

  return (
    <div role="tabpanel" hidden={activeKey !== eventKey}>
      {activeKey === eventKey && <Container>{children}</Container>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  eventKey: PropTypes.string.isRequired,
  activeKey: PropTypes.string.isRequired,
};

export default function PendingTaskButton() {
  const [activeKey, setActiveKey] = useState("cash");

  return (
    <Container>
      <Tabs
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        className="mb-3"
        id="pending-task-tabs"
        variant="underline"
      >
        <Tab eventKey="cash" title="CASH">
          <CustomTabPanel activeKey={activeKey} eventKey="cash">
            <PendingTaskDataCard />
          </CustomTabPanel>
        </Tab>
      </Tabs>
    </Container>
  );
}
