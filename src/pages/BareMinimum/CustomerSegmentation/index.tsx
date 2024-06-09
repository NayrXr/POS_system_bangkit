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
      <div className="grid grid-cols-12 gap-x-5">
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

      <div>
        <ProductsStatistics />
      </div>
      

    </React.Fragment>
  );
};

export default Analytics;
