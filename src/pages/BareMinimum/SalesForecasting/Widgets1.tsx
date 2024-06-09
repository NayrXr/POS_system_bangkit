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
            <div className="order-2 md:col-span-12 lg:col-span-12 col-span-12 2xl:order-1 bg-orange-100 dark:bg-orange-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-orange-500/20 relative overflow-hidden">
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
        </React.Fragment>
    );
};

export default Widgets1;
