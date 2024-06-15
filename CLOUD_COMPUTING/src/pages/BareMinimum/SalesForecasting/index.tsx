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

            "2023-06: The sales forecast indicates a potential dip. It might be beneficial to increase your marketing efforts and enhance your product visibility. Explore new advertising channels, engage with your customers on social media, and possibly offer limited-time deals to attract more buyers.",
            <br></br>
            "2023-07: The sales trend is positive for the upcoming month. To capitalize on this momentum, ensure you have sufficient inventory ready to meet the demand. Consider running promotional campaigns or offering discounts to further boost sales.",
            <br></br>
            "2023-08: The sales forecast indicates a potential dip. It might be beneficial to increase your marketing efforts and enhance your product visibility. Explore new advertising channels, engage with your customers on social media, and possibly offer limited-time deals to attract more buyers.",
            <br></br>
            "Next month: Predicted sales are 892.0290335236208. Adjust your strategies accordingly to maximize sales.",<br></br>
            
            "Next trimester: Predicted sales are 2678.1547391265094. Plan your marketing and inventory strategies to handle the expected demand.
            </div>
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
                        <h6 className="mb-4 text-15">Monthly Sales This Year</h6>
                        <DataLabels chartId="columnWithDatalabelChart" />
                    </div>
                </div>

            <div><DataLabelsBar/> </div>
        </React.Fragment>
    );
};

export default HRDashboard;
