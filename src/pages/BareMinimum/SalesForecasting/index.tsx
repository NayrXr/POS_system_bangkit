import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import Widgets1 from './Widgets1'
import Widgets2 from './Widgets2';

import { ChevronDown, Cog, Coins, Kanban, ListFilter, Users } from 'lucide-react';
import { Dropdown } from 'Common/Components/Dropdown';
import { PerspectiveChart } from './datachart';


const HRDashboard = () => {

    return (
        <React.Fragment>
            <BreadCrumb title='Sales Forecasting' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
                <Widgets />
            </div>
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
                <Widgets1 />
            </div>
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
                <Widgets2 />
            </div>
            <div className="order-5 col-span-12 2xl:order-1 card 2xl:row-span-2 2xl:col-span-8">
                <div className="card-body">
                    <div className="flex items-center gap-2 mb-3">
                        <h6 className="text-15 grow">Platform Perspective</h6>
                        <Dropdown className="relative shrink-0">
                            <span className="ltr:mr-1 rtl:ml-1 text-slate-500 dark:zink-200">Sort by </span>
                            <Dropdown.Trigger type="button" className="px-2 py-1.5 text-xs bg-white border-dashed text-slate-500 btn border-slate-500 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-600 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-600 active:text-slate-600 active:bg-slate-50 active:border-slate-600 dark:bg-zink-700 dark:text-zink-200 dark:border-zink-400 dark:ring-zink-400/20 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:focus:bg-zink-600 dark:focus:text-zink-100 dark:active:bg-zink-600 dark:active:text-zink-100 dropdown-toggle" id="emailDataDropdown" data-bs-toggle="dropdown">
                                This Yearly <ChevronDown className="inline-block size-4 ltr:ml-1 rlt:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="emailDataDropdown">
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">1 Weekly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">1 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">3 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">6 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">This Yearly</Link>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                    {/* <div id="platformPerspective" className="apex-charts" data-chart-colors='["bg-custom-500"]' dir="ltr"></div> */}
                    <PerspectiveChart chartId="platformPerspective"  data-chart-colors='["bg-custom-500"]' />
                    <div id="chartdiv"></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HRDashboard;
