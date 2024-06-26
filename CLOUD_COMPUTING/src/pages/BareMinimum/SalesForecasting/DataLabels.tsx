import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const DataLabels = ({ chartId }: any) => {
    const [chartData, setChartData] = useState({ month: [], sales: [] });
    useEffect(() => {
        fetch('https://ps01sf-g463lwzijq-et.a.run.app/monthly-sales-latest-year')
          .then(response => response.json())
          .then(data => setChartData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    const chartColors = useChartColors(chartId);

    //Column with Data Labels
    const series = [{
        name: 'Sales',
        data: chartData.sales
    }];
    var options : any = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val : any) {
                return val;
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },

        xaxis: {
            categories: chartData.month,
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val : any) {
                    return val;
                }
            }

        },
        colors: chartColors,
        title: {
            text: 'Monthly Sales This Year',
            floating: true,
            offsetY: 330,
            align: 'center',
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
    DataLabels
};