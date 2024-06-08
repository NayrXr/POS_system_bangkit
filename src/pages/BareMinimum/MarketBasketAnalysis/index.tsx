import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import WelcomeWidget from './WelcomeWidget';
import OrderStatistics from './OrderStatistics';
import Widgets from './Widgets';
import SalesRevenue from './SalesRevenue';
import TrafficResources from './TrafficResources';
import ProductsOrders from './ProductsOrders';
import CustomerService from './CustomerService';
import SalesMonth from './SalesMonth';
import TopSellingProducts from './TopSellingProducts';
import Audience from './Audience';
import ProductsStatistics from './ProductsStatistics';
import { useNavigate } from 'react-router-dom';
import { BasicBarChart } from './BasicBarChart';
import MBA from './MBA'

const Ecommerce = () => {

    const navigate = useNavigate();
    useEffect(() => navigate("/market-basket-analysis"), [navigate]);

    return (
        <React.Fragment>
            <BreadCrumb title='MBA' pageTitle='Dashboards' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicBarChart chartId="basicBar" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Legend</h6>
                        <h1 className="mb-4 text-15"> LiFt Ddan kawan-kawan nya </h1>
                    </div>
                </div>
            </div>
                <div>
                    < ProductsStatistics />
                </div>
                <div>
                    < MBA />
                </div>
        </React.Fragment>
    );
};

export default Ecommerce;
