import React from "react";
import { mockData } from "./Data";
import { backendData } from "./Backend_Data";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartDataLabels
);

const labels = backendData.map((el) => el.DATE);

export const data = {
  labels,
  datasets: [
    {
      type: "bar",
      label: "Current Value ($)",
      backgroundColor: "#0dc5a2",
      data: backendData.map((el) => el.CURRENT_YEAR_lABEL),
      borderColor: "white",
      borderWidth: 0,
    },
    {
      type: "bar",
      label: "Previous Year value ($)",
      backgroundColor: "#1be8bd",
      data: backendData.map((el) => el.PREV_YEAR_lABEL),
      borderColor: "white",
      borderWidth: 0,
    },
    {
      type: "line",
      label: "A.S.P",
      borderColor: "red",
      borderWidth: 1,
      fill: true,
      data: backendData.map((el) => el.ASP_lABEL),
      yAxisID: "y1",
    },
    
    {
      type: "line",
      label: "Gross Margin",
      borderColor: "green",
      borderWidth: 1,
      fill: true,
      data: backendData.map((el) => el.GROSS_MARGIN),
      yAxisID: "y2",
    },
  ],
};

function formatNumbers(value) {
  if (value >= 1000000000 || value <= -1000000000) {
    return (value / 1e9).toFixed(2) + "B";
  } else if (value >= 1000000 || value <= -1000000) {
    return (value / 1e6).toFixed(2) + "M";
  } else if (value >= 1000 || value <= -1000) {
    return (value / 1e3).toFixed(2) + "K";
  }
  return value;
}

const formatter = (value, index, values) => {
  if (value >= 1000000000 || value <= -1000000000) {
    return value / 1e9 + "B";
  } else if (value >= 1000000 || value <= -1000000) {
    return value / 1e6 + "M";
  } else if (value >= 1000 || value <= -1000) {
    return value / 1e3 + "K";
  }
  return value;
};

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Year wise data",
    },
    tooltip: {
      callbacks: {
        title: function (title) {
          console.log(title);
          return "Date: " + title[0].label;
        },
      },
    },
    legend: {
      position: "bottom",
    },
    datalabels: {
      display: true,
      color: "black",
      formatter: formatNumbers,
      anchor: "end",
      offset: -25,
      align: "end",
      font: {
        weight: "bold",
      },
    },
  },
  // locale: "en-IN",
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        display: false,
      },
      ticks: {
        // Shorthand the millions
        callback: formatter,
      },
    },
    y1: {
      grid: {
        display: false,
      },
      ticks: {
        // Shorthand the millions
        callback: formatter,
      },
    },
    y2: {
      grid: {
        display: false,
      },
      ticks: {
        // Shorthand the millions
        callback: formatter,
      },
    },
  },

  y: {
    type: "linear",
    display: true,
    position: "left",
  },
  y1: {
    type: "linear",
    display: true,
    position: "right",
  },
  y2: {
    type: "linear",
    display: false,
    // position: "bottom",
  },
};

export const Graph = () => {
  return <Chart width="90%" height="25%" data={data} options={options} />;
};
