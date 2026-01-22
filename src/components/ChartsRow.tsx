import ReactApexChart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";
import "./Charts.css";

const ChartsRow: React.FC = () => {
  const salesSeries = [
    {
      name: "Sales",
      data: [500, 180, 250, 190, 240, 180, 280, 100, 230, 40, 200, 100],
    },
    {
      name: "Revenue",
      data: [210, 310, 290, 340, 150, 400, 130, 500, 300, 280, 360, 400],
    },
  ];

  const salesOptions: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      fontFamily: "Open Sans, sans-serif",
      background: "transparent",
      animations: { enabled: false },
      zoom: { enabled: false },
      sparkline: { enabled: false },
    },
    colors: ["#3182ce", "#ffffff"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 3 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(255, 255, 255, 0.8)",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: { style: { colors: "#ffffff", fontSize: "12px" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 500,
      tickAmount: 5,
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "12px",
        },
      },
    },
    tooltip: { enabled: false },
    legend: { show: false },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          xaxis: {
            labels: { style: { colors: "#ffffff", fontSize: "10px" } },
          },
          yaxis: {
            min: 0,
            max: 500,
            tickAmount: 5,
            labels: { style: { colors: "#ffffff", fontSize: "10px" } },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          xaxis: {
            labels: { style: { colors: "#ffffff", fontSize: "9px" } },
          },
          yaxis: {
            min: 0,
            max: 500,
            tickAmount: 5,
            labels: { style: { colors: "#ffffff", fontSize: "9px" } },
          },
        },
      },
    ],
  };

  const perfSeries = [
    {
      name: "Orders",
      data: [25, 20, 30, 22, 17, 29],
    },
  ];

  const perfOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      fontFamily: "Open Sans, sans-serif",
      animations: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    colors: ["orange"],
    dataLabels: { enabled: false },
    grid: {
      show: true,
      borderColor: "rgba(255, 255, 255, 0.8)",
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: ["Jul", "Aug", "sep", "Oct", "Nov", "Dec"],
      labels: { style: { colors: "#ffffff", fontSize: "12px" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 3,
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "12px",
        },
      },
    },
    tooltip: { enabled: false },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "30%",
            },
          },
          xaxis: {
            labels: { style: { colors: "#ffffff", fontSize: "10px" } },
          },
          yaxis: {
            min: 0,
            max: 30,
            tickAmount: 3,
            labels: { style: { colors: "#ffffff", fontSize: "10px" } },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "40%",
            },
          },
          xaxis: {
            labels: { style: { colors: "#ffffff", fontSize: "9px" } },
          },
          yaxis: {
            min: 0,
            max: 30,
            tickAmount: 3,
            labels: { style: { colors: "#ffffff", fontSize: "9px" } },
          },
        },
      },
    ],
  };

  return (
    <div className="charts-grid-layout">
      <div className="chart-card-main">
        <div className="chart-header">
          <h2 className="chart-title chart-title-main">Sales overview</h2>
          <h6 className="chart-subtitle chart-subtitle-success">
            (+5) more <span className="chart-subtitle-secondary">in 2021</span>
          </h6>
        </div>
        <div className="chart-container-wrapper">
          <ReactApexChart
            options={salesOptions}
            series={salesSeries}
            type="area"
            height={300}
            width="100%"
          />
        </div>
      </div>

      <div className="chart-card-main">
        <div className="chart-header">
          <h6 className="chart-subtitle chart-subtitle-performance">
            PERFORMANCE
          </h6>
          <h2 className="chart-title chart-title-secondary">Total orders</h2>
        </div>
        <div className="chart-container-wrapper">
          <ReactApexChart
            options={perfOptions}
            series={perfSeries}
            type="bar"
            height={300}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartsRow;
