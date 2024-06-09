import React, { useState, useEffect } from 'react';
import { ChevronDown, Cog, Coins, Kanban, ListFilter, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';

interface Data {
    total_revenue: string;
  }



const Widgets2 = () => {
    const [total_revenue, setTotalRevenue] = useState(0);

    useEffect(() => {
      fetch('https://ps01cs-g463lwzijq-et.a.run.app/api/total_revenue')
       .then(response => response.json())
       .then(data => setTotalRevenue(data.total_revenue))
       .catch(error => console.error('Error:', error));
    }, []);

    return (
        <React.Fragment>            
            <div className="order-3 md:col-span-12 lg:col-span-12 col-span-12 bg-sky-100 dark:bg-sky-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-sky-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter className="absolute top-0 size-32 stroke-1 text-sky-200/50 dark:text-sky-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div className="flex items-center justify-center size-12 rounded-md bg-sky-500 text-15 text-sky-50">
                        <Coins />
                    </div>
                    <h5 className="mt-5 mb-2">Rp. 
                    <CountUp end={total_revenue} className='counter-value' />
                        </h5>
                    <p className="text-slate-500 dark:text-slate-200">Sales Revenue</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets2;
