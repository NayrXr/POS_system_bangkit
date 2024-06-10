import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const BasicBarChart = ({ chartId }: any) => {

    const [chartData, setChartData] = useState({ categories: [], values: [] });
    useEffect(() => {
        fetch('https://ps01mba-g463lwzijq-et.a.run.app/api/basic-barplot')
          .then(response => response.json())
          .then(data => setChartData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    const chartColors = useChartColors(chartId);
    //basic bar
    const series = [{
        data: chartData.values
    }];
    var options : any = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        colors: chartColors,
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: chartData.categories,
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    BasicBarChart
};