import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";

function LineGraph() {
  const [data, setData] = useState({});

  const buildChartData = (data, caseType) => {
    const chartData = [];
    let lastDataPoint;

    data[caseType].forEach(date => {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[caseType][date] - lastDataPoint
        }
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[caseType][date];
    });
    return chartData;
  }

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
    .then((response) => response.json())
    .then ((data) => {
      console.log("LINEGRAPH DATA ", data);
      const chartData = buildChartData(data);
      setData(chartData);
    })
  }, []);


  return (
    <div>
      {/* <Line data options /> */}
      <h1>LINEGRAPH</h1>
    </div>
  )
}

export default LineGraph
