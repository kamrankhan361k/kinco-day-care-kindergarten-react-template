import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = ({ value, background, color }) => {
  let series = [value],
    options = {
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            show: false,
            margin: 20,
            size: "72%",
            background: "#fff",
            dropShadow: {
              enabled: false,
            },
          },
          track: {
            background: background ? background : "rgba(67, 186, 255, 0.1)",
            strokeWidth: "100%",
            margin: 0, // margin is in pixels
          },

          dataLabels: {
            show: false,
            value: {
              offsetY: -7,
              color: "#111",
              fontSize: "20px",
              show: true,
            },
          },
        },
      },
      fill: {
        colors: [color ? color : "#be9a78", "rgba(67, 186, 255, 0.1)"],
      },
      stroke: {
        lineCap: "round",
      },
      labels: [""],
    };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={200}
      />
    </div>
  );
};
export default DonutChart;
