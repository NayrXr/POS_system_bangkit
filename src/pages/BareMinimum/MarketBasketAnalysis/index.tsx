import React, { useEffect,useState } from 'react';
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

interface Data {
    insights: string[];
} 
const Ecommerce = () => {

    const navigate = useNavigate();
    useEffect(() => navigate("/market-basket-analysis"), [navigate]);

    const [legendata, setChartData] = useState({ insights:('')});
    useEffect(() => {
        fetch('https://ps01mba2-g463lwzijq-et.a.run.app/api/mba-insights')
          .then(response => response.json())
          .then(data => setChartData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

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
                        <h2 className="mb-4 text-15">{legendata.insights[0]} </h2>
                        <h2 className="mb-4 text-15">{legendata.insights[1]} </h2>
                        <h2 className="mb-4 text-15">{legendata.insights[2]} </h2>
                        <h2 className="mb-4 text-15">{legendata.insights[3]} </h2>
                        <h2 className="mb-4 text-15">{legendata.insights[4]} </h2>
                        <p> "Metric": "Support",<br></br>
                            "Definition": "Proportion of transactions that contain a specific itemset.",<br></br>
                            "Interpretation": "Indicates how frequently an itemset (combination of items) appears together in the dataset."<br></br>
                            'Metric": "Confidence",<br></br>
                            "Definition": "Likelihood of item Y being purchased when item X is purchased.",<br></br>
                            "Interpretation": "Measures the strength of the rule (association) that if item X is purchased, then item Y is also likely to be purchased."<br></br>
                            "Metric": "Lift",<br></br>
                            "Definition": "Measures how much more likely item Y is to be purchased when item X is purchased, compared to its likelihood without considering item X.",<br></br>
                            "Interpretation": "Indicates the strength of the association between item X and item Y, considering the baseline probability of purchasing item Y."<br></br>
                        </p>
                    </div>
                </div>
            </div>
                <div>
                    < ProductsStatistics />
                </div>
        </React.Fragment>
    );
};

export default Ecommerce;
