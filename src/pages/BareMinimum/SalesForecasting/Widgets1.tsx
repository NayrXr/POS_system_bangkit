import React, { useState, useEffect } from 'react';
import { ChevronDown, Cog, Coins, Kanban, ListFilter, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';

interface Data {
    total_revenue: string;
  }



const Widgets1 = () => {
    const [total_revenue, setTotalRevenue] = useState(0);

    useEffect(() => {
      fetch('https://ps01cs-g463lwzijq-et.a.run.app/api/total_revenue')
       .then(response => response.json())
       .then(data => setTotalRevenue(data.total_revenue))
       .catch(error => console.error('Error:', error));
    }, []);

    return (
        <React.Fragment>
            <div className="order-1 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-green-100 dark:bg-green-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-green-500/20 relative overflow-hidden">
                <div className="card-body">
                    <Kanban className="absolute top-0 size-32 stroke-1 text-green-200/50 dark:text-green-500/20 ltr:-right-10 rtl:-left-10"></Kanban>
                    <div className="flex items-center justify-center size-12 bg-green-500 rounded-md text-15 text-green-50">
                        <Users />
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={15876} className="counter-value" />
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Total Customer</p>
                </div>
            </div>
            <div className="order-2 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-orange-100 dark:bg-orange-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-orange-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter className="absolute top-0 size-32 stroke-1 text-orange-200/50 dark:text-orange-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div className="flex items-center justify-center size-12 bg-orange-500 rounded-md text-15 text-orange-50">
                    <Cog />
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={103.15} decimals={2} className="counter-value" />
                        k</h5>
                    <p className="text-slate-500 dark:text-slate-200">Total Order</p>
                </div>
            </div>
            
            <div className="order-3 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-sky-100 dark:bg-sky-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-sky-500/20 relative overflow-hidden">
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
            <div className="order-4 md:col-span-6 lg:col-span-3 col-span-12 2xl:order-1 bg-purple-100 dark:bg-purple-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-purple-500/20 relative overflow-hidden">
                <div className="card-body">
                    <Kanban className="absolute top-0 size-32 stroke-1 text-purple-200/50 dark:text-purple-500/20 ltr:-right-10 rtl:-left-10"></Kanban>
                    <div className="flex items-center justify-center size-12 bg-purple-500 rounded-md text-15 text-purple-50">
                        <Users />
                    </div>
                    <h5 className="mt-5 mb-2">
                    <CountUp end={11.21} decimals={2} className="counter-value" />%
                        </h5>
                    <p className="text-slate-500 dark:text-slate-200">Bounce Rate</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets1;