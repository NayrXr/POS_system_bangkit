import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import LocationBased from './LocationBased';
import Interaction from './Interaction';
import UserDevice from './UserDevice';
import DailyVisit from './DailyVisit';
import Reports from './Reports';
import MonthlyCampaign from './MonthlyCampaign';
import Subscription from './Subscription';
import TrafficSource from './TrafficSource';
import ProductsStatistics from './ProductsStatistics';
import CustomerSegmentation from './CustomerSegmentation';
import { BasicBarChart } from './BasicBarChart';
import { DistributedColumns } from './DistributedColumns';
import DefaultWithout from './DefaultWithout';

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
      <div>
        <ProductsStatistics />
        </div>
      < div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
        <DistributedColumns />
        <DefaultWithout />
      </div>
      <div><CustomerSegmentation />
        </div>
      

    </React.Fragment>
  );
};

export default Analytics;
