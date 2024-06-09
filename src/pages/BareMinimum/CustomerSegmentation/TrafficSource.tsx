import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';


const TrafficSource = () => {
    const [clusterLabels, setClusterLabels] = useState([]);
    const [totalSpend, setTotalSpend] = useState([]);
    const [total_revenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        fetch('https://ps01cs-g463lwzijq-et.a.run.app/api/total_revenue')
         .then(response => response.json())
         .then(data => setTotalRevenue(data.total_revenue))
         .catch(error => console.error('Error:', error));
      }, []);
  
    useEffect(() => {
      // Define an async function to fetch the data
      const fetchData = async () => {
        try {
          const response = await fetch('https://ps01cs2-g463lwzijq-et.a.run.app/customers-barplot'); 
          const data = await response.json();
          setClusterLabels(data.cluster_labels);
          setTotalSpend(data.total_spend);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      // Call the fetchData function
      fetchData();
    }, []);

    //width
    const calculateWidth = (spend: number): string =>{
        if (total_revenue === 0 || spend === 0) return '0%';
        return `${Math.min((spend / total_revenue) * 100, 100)}%`; // Limiting to 100% to avoid overflow
    };

    return (
        <React.Fragment>
            <div className="col-span-12 lg:col-span-6 order-[15] 2xl:order-1 card 2xl:col-span-3">
                <div className="card-body">
                    <div className="flex items-center gap-4 mb-3">
                        <h6 className="text-15 grow">Total Revenue per Membership</h6>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <div className="flex items-center justify-between gap-4 mb-2">
                                <h6>{clusterLabels[0]}</h6>
                                <span className="text-slate-500 dark:text-zink-200">Rp.
                                <CountUp end={totalSpend[0]} className='counter-value'/></span>
                            </div>
                            <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                                <div className="h-3.5 rounded bg-custom-500" style={{width: calculateWidth(totalSpend[0])}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between gap-4 mb-2">
                                <h6>{clusterLabels[1]}</h6>
                                <span className="text-slate-500 dark:text-zink-200">Rp.
                                <CountUp end={totalSpend[1]} className='counter-value'/></span>
                            </div>
                            <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                                <div className="h-3.5 rounded bg-yellow-500" style={{width: calculateWidth(totalSpend[1])}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between gap-4 mb-2">
                                <h6>{clusterLabels[2]}</h6>
                                <span className="text-slate-500 dark:text-zink-200">Rp.
                                <CountUp end={totalSpend[2]} className='counter-value'/></span>
                            </div>
                            <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                                <div className="h-3.5 rounded bg-green-500" style={{width: calculateWidth(totalSpend[2])}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between gap-4 mb-2">
                                <h6>{clusterLabels[3]}</h6>
                                <span className="text-slate-500 dark:text-zink-200">Rp.
                                <CountUp end={totalSpend[3]} className='counter-value'/></span>
                            </div>
                            <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                                <div className="h-3.5 rounded bg-orange-500 dark:text-zink-500" style={{width: calculateWidth(totalSpend[3])}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between gap-4 mb-2">
                                <h6>{clusterLabels[4]}</h6>
                                <span className="text-slate-500 dark:text-zink-200">Rp.
                                <CountUp end={totalSpend[4]} className='counter-value'/></span>
                            </div>
                            <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                                <div className="h-3.5 rounded bg-slate-500 dark:text-zink-500" style={{width: calculateWidth(totalSpend[4])}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TrafficSource;
