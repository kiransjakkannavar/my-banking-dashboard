import React, { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import WorkflowChart from "./WorkflowChart";

function CustomTabPanel({ children, eventKey, activeKey }) {
  return (
    <div role="tabpanel" hidden={activeKey !== eventKey}>
      {activeKey === eventKey && <Container>{children}</Container>}
    </div>
  );
}

const WorkflowBarChart = () => {
  const [activeKey, setActiveKey] = useState("client");

  const handleSelect = (key) => setActiveKey(key);

  return (
    <Container>
      <Tabs
        activeKey={activeKey}
        onSelect={handleSelect}
        className="mb-3"
        variant="underline"
      >
        <Tab eventKey="client" title="CLIENT WORKFLOW">
          <CustomTabPanel activeKey={activeKey} eventKey="client">
            <WorkflowChart />
          </CustomTabPanel>
        </Tab>
        <Tab eventKey="bank" title="BANK WORKFLOW">
          <CustomTabPanel activeKey={activeKey} eventKey="bank">
            Item Two
          </CustomTabPanel>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default WorkflowBarChart;
