import React, { useState, useEffect} from 'react';
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const DistributedColumns = ({ chartId }: any) => {

    const [chartData, setChartData] = useState({ average_monetary: [], segment: [] });
    useEffect(() => {
        fetch('https://ps01rfm-g463lwzijq-et.a.run.app/api/rfm-barplot')
          .then(response => response.json())
          .then(data => setChartData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    const chartColors = useChartColors(chartId);

    //Distributed Columns
    const series = [{
        data: chartData.average_monetary
    }];
    var options : any = {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart : any, w : any, e : any) {
                    // console.log(chart, w, e)
                }
            }
        },
        colors: chartColors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: chartData.segment,
            labels: {
                style: {
                    colors: chartColors,
                    fontSize: '12px'
                }
            },
            title: {
                text: 'Segment',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function (value: number) {
                    return new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                    }).format(value);
                }
            },
            title: {
                text: 'Total Revenue',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                }
            }
        },
        tooltip: {
            y: {
                formatter: function (value:number) {
                    return new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                    }).format(value);
                },
                title: {
                    formatter: function () {
                        return 'Revenue'; // Change tooltip title to 'Revenue'
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
                data-chart-colors='["bg-custom-500", "bg-yellow-500", "bg-green-500", "bg-orange-500", "bg-sky-500", "bg-purple-500", "bg-red-500", "bg-emerald-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    DistributedColumns
};