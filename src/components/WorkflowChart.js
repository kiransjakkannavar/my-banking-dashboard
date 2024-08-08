import React from "react";

const WorkflowChart = () => {
  return (
    <div
      className="workflow d-flex justify-content-around align-items-end"
      style={{ height: "200px" }}
    >
      <BarChart label="Processed by Bank" value={25} color="#3de98d" />
      <BarChart label="Rejected by Bank" value={14} color="#21adfe" />
    </div>
  );
};

const BarChart = ({ label, value, color }) => {
  return (
    <div
      className="bar-chart text-center position-relative"
      style={{ width: "60px" }}
    >
      <div
        className="bar position-relative"
        style={{
          height: `${value * 5}px`,
          backgroundColor: color,
          width: "100%",
        }}
      >
        <span
          className="value position-absolute"
          style={{ color: "black", fontWeight: "bold", top: "-20px" }}
        >
          {value}
        </span>
      </div>
      <p className="chart-label">{label}</p>
    </div>
  );
};

export default WorkflowChart;
