import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const DataLabelsBar = ({ chartId }: any) => {
    const [chartData, setChartData] = useState({ product_name: [], sales: [] });
    useEffect(() => {
        fetch('https://ps01sf-g463lwzijq-et.a.run.app/top-3-products-last-month')
          .then(response => response.json())
          .then(data => setChartData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    const chartColors = useChartColors(chartId);
    //Custom DataLabels Bar
    const series = [{
        data: chartData.sales
    }];
    var options : any = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'bottom'
                },
            }
        },
        colors: chartColors,
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function (val : any, opt : any) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
            },
            offsetX: 0,
            dropShadow: {
                enabled: true
            }
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: chartData.product_name,
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        title: {
            text: 'Top 3 Products Last Month',
            align: 'center',
            floating: true
        },
        subtitle: {
            text: '',
            align: 'center',
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return '';
                    }
                }
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-sky-500", "bg-yellow-500", "bg-red-500", "bg-purple-500", "bg-slate-300", "bg-slate-800", "bg-emerald-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    DataLabelsBar
};