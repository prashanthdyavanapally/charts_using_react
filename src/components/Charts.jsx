import React from "react";
import { mockData } from "./Data";
import {
  ComposedChart,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  Line,
  LabelList,
  YAxis,
} from "recharts";

const Charts = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        overflow: "scroll",
      }}
    >
      <ComposedChart width={1340} height={250} data={mockData} barGap={0}>
        <XAxis dataKey="name" tickLine={false} dy={10} />
        <YAxis type="number" domain={[0, 1000]} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="Curr.Value ($)" barSize={40} fill="#0dc5a2">
          <LabelList
            dataKey="Curr.Value ($)"
            position="insideBottom"
            style={{ fill: "#153462", fontWeight: "500", fontSize: "0.9rem" }}
          />
        </Bar>

        <Bar dataKey="Prev.Year Value ($)" barSize={40} fill="#1be8bd">
          <LabelList
            dataKey="Prev.Year Value ($)"
            position="insideTop"
            style={{ fill: "#182747", fontSize: "0.9rem" }}
          />
        </Bar>
        <Line
          dataKey="A.S.P"
          stroke="#365e9f"
          strokeWidth="2"
          dot={{ stroke: "blue", strokeWidth: 2, fill: "blue" }}
        >
          <LabelList
            dataKey="A.S.P"
            position="bottom"
            style={{ fill: "#282A3A", fontSize: "13px", fontWeight: "500" }}
          />
        </Line>
        <Line
          dataKey="Gross Margin"
          stroke="#db7560"
          strokeWidth="2"
          dot={{ stroke: "red", strokeWidth: 2, fill: "red" }}
        >
          <LabelList
            dataKey="Gross Margin"
            position="top"
            style={{ fill: "#db7560", fontSize: "13px", fontWeight: "500" }}
          />
        </Line>
      </ComposedChart>
    </div>
  );
};

export default Charts;
