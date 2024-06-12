import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import { DataLabels } from './DataLabels';
import Widgets1 from './Widgets1'
import Widgets2 from './Widgets2';

import { ChevronDown, Cog, Coins, Kanban, ListFilter, Users } from 'lucide-react';
import { Dropdown } from 'Common/Components/Dropdown';
import { PerspectiveChart } from './datachart';
import { DataLabelsBar } from './DataLabelsBar';



const HRDashboard = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Sales Forecasting' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 gap-x-5">
                <Widgets />
            </div>
            <div className="order-5 col-span-12 2xl:order-1 card 2xl:row-span-2 2xl:col-span-8">
                <div className="card-body">
                    <div className="flex items-center gap-2 mb-3">
                        <h6 className="text-15 grow">Sales of Product Every Product Last Month</h6>
                    </div>
                    {/* <div id="platformPerspective" className="apex-charts" data-chart-colors='["bg-custom-500"]' dir="ltr"></div> */}
                    <PerspectiveChart chartId="platformPerspective"  data-chart-colors='["bg-custom-500"]' />
                    <div id="chartdiv"></div>
                </div>
            </div>

            <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Monthly Sales Latest Year</h6>
                        <DataLabels chartId="columnWithDatalabelChart" />
                    </div>
                </div>

            <div><DataLabelsBar/> </div>
        </React.Fragment>
    );
};

export default HRDashboard;
