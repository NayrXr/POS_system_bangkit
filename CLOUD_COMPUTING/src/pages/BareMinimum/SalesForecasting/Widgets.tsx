import React, { useState, useEffect } from 'react';
import { ChevronDown, Cog, Coins, Kanban, ListFilter, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';

interface Data {
    title: string;
    value: number;
}



const Widgets = () => {
    const [sales, setTotalRevenue] = useState<number | null>(null);

    useEffect(() => {
      fetch('https://ps01sf-g463lwzijq-et.a.run.app/future-sales-next-month')
       .then(response => response.json())
       .then(data => setTotalRevenue(data.value))
       .catch(error => console.error('Error:', error));
    }, []);

    return (
        <React.Fragment>
            <div className="order-1 md:col-span-12 lg:col-span-12 col-span-12 2xl:order-1 bg-green-100 dark:bg-green-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-green-500/20 relative overflow-hidden">
                <div className="card-body">
                    <Kanban className="absolute top-0 size-32 stroke-1 text-green-200/50 dark:text-green-500/20 ltr:-right-10 rtl:-left-10"></Kanban>
                    <div className="flex items-center justify-center size-12 bg-green-500 rounded-md text-15 text-green-50">
                        <Users />
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={892.0290335236208} className="counter-value" />
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Future Sales Next Month</p>
                </div>
            </div>
            <div className="order-2 md:col-span-12 lg:col-span-12 col-span-12 2xl:order-1 bg-orange-100 dark:bg-orange-500/20 card 2xl:col-span-2 group-data-[skin=bordered]:border-orange-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter className="absolute top-0 size-32 stroke-1 text-orange-200/50 dark:text-orange-500/20 ltr:-right-10 rtl:-left-10"></ListFilter>
                    <div className="flex items-center justify-center size-12 bg-orange-500 rounded-md text-15 text-orange-50">
                    <Cog />
                    </div>
                    <h5 className="mt-5 mb-2">
                        <CountUp end={2678.1547391265094} className="counter-value" />
                    </h5>
                    <p className="text-slate-500 dark:text-slate-200">Future Sales Trimester</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets;
