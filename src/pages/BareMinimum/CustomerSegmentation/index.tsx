import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import Subscription from './Subscription';
import TrafficSource from './TrafficSource';
import ProductsStatistics from './ProductsStatistics';
import CustomerSegmentation from './CustomerSegmentation';
import { BasicBarChart } from './BasicBarChart';
import { DistributedColumns } from './DistributedColumns';
import { GroupedChart } from './GroupedChart';

const Analytics = () => {

  return (
    <React.Fragment>
      <BreadCrumb title='Customer Segmentation' pageTitle='Dashboards' />
      <div className="grid grid-cols-12 gap-x-5 ">
        <Widgets />
        </div>
        
      <div className="grid grid-cols-12 gap-x-5">
        <Subscription />
        <TrafficSource />
      </div>

      < div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
        <DistributedColumns />
        <GroupedChart />
      </div>
      <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
        <div className="card">
                    <div className="card-body">
                    <h6 className="text-15 grow"> Best Customer </h6>
                    <p>  Bought most recently and most often, and spend the most</p>
                    <p>  No price incentives, new products, and loyalty programs</p>
                    <br></br>
                    <h6 className="text-15 grow"> Loyal Customers </h6>
                    <p>  Buy most frequently</p>
                    <p>  Use R and M to further segment</p>
                    <br></br>
                    <h6 className="text-15 grow"> Big Spenders </h6>
                    <p>  Spend the most</p>
                    <p>  Market your most expensive products</p>
                    <br></br>
                    <h6 className="text-15 grow"> Almost Lost </h6>
                    <p>  Haven’t purchased for some time, but purchased frequently and spend the most</p>
                    <p>  Aggressive price incentives</p>
                    </div>
        </div>
        <div className="card">
                    <div className="card-body">
                      
                    <h6 className="text-15 grow"> Lost Customers </h6>
                    <p>  Bought most recently and most often, and spend the most</p>
                    <p>  No price incentives, new products, and loyalty programs</p>
                    <br></br>
                    <h6 className="text-15 grow"> Lost Cheap Customers </h6>
                    <p>  Last purchased long ago, purchased few, and spent little</p>
                    <p>  Don’t spend too much trying to re-acquire</p>
                    <br></br>
                    <h6 className="text-15 grow"> Others </h6>
                    <p>  Diverse group of customers with varying engagement levels</p>
                    <p>  Test different marketing approaches (e.g., discounts, personalized emails) and measure their impact</p>
                    </div>
        </div>
      </div>
      <div>
        <ProductsStatistics />
      </div>
      

    </React.Fragment>
  );
};

export default Analytics;
