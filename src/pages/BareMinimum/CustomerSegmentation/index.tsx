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


      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-12 lg:col-span-6 order-[14] 2xl:order-1 card 2xl:col-span-3">
                <div className="card-body">
                    <h6 className="mb-3 text-15">Total Revenue Per Segment</h6>
                    <DistributedColumns />
                </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-[14] 2xl:order-1 card 2xl:col-span-3">
            <div className="card-body">
                    <h6 className="mb-3 text-15">TotalSpend/previous</h6>
                    <GroupedChart />
                </div>
            </div>
      </div>

      <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
        <div className="card">
        <div className="card-body">
        <h1 className="text-22 grow"> Customer Segmentation </h1>
                    <h5 className="text-18 grow"> Best Customer </h5>
                    <h3 className="text-15 grow"> Description </h3>
                    <p>  Customers who made the most recent purchases, purchased the most frequently, and bought the highest number of items.</p>
                    <h3 className="text-15 grow"> Marketing </h3>
                    <p>   By recognizing and rewarding your best customers with exclusive discounts, enhanced loyalty rewards, personalized recommendations, early access to sales, and thank-you gifts, you can strengthen their loyalty, increase their lifetime value, and encourage them to continue being advocates for your brand.</p>
                    <br></br>

                    <h5 className="text-18 grow"> Loyal Customers </h5>
                    <h3 className="text-15 grow"> Description </h3>
                    <p> Customer who purchased the most frequently</p>
                    <h3 className="text-15 grow"> Marketing </h3>
                    <p>  By recognizing and rewarding your loyal customers with personalized offers, exclusive benefits, and enhanced engagement, you can strengthen their loyalty, increase their lifetime value, and encourage them to continue being advocates for your brand.</p>
                    <br></br>

                    <h5 className="text-18 grow"> Big Spenders Customers</h5>
                    <h3 className="text-15 grow"> Description </h3>
                    <p>  Customer who spends the most on your products</p>
                    <h3 className="text-15 grow"> Marketing </h3>
                    <p> By recognizing and rewarding your big spenders' customers with exclusive discounts, offering unique rewards only available to them, giving thank-you gifts, and providing faster loyalty points accumulation to enhance their shopping experience, foster loyalty, and increase their lifetime value</p>
                    <br></br>
                    </div>
        </div>
        <div className="card">
                    <div className="card-body">
                    <h5 className="text-18 grow"> Almost Lost Customers</h5>
                    <h3 className="text-15 grow"> Description </h3>
                    <p> Customers who haven't purchased for some time but used to purchase frequently and spend the most</p>
                    <h3 className="text-15 grow"> Marketing </h3>
                    <p> By implementing personalized emails/messages, offering special incentives, limited-time offer, offer bonus loyalty points/rewards if they make a purchase within a specific timeframe, send a survey to understand why they stopped purchasing and what changes they would like to see.</p>

                    <br></br>
                    <h5 className="text-18 grow"> Lost Customers </h5>
                    <h3 className="text-15 grow"> Description </h3>
                    <p>  Customers who have ceased all transactions but who previously purchased frequently and spent the most</p>
                    <h3 className="text-15 grow"> Marketing </h3>
                    <p>  By understanding the reasons for their departure, learning from their feedback, and exploring possible reactivation strategies if feasible</p>
                    <br></br>

                    <h5 className="text-18 grow"> Lost Cheap Customers </h5>
                    <h3 className="text-15 grow"> Description </h3>
                    <p>  Customers who purchased a long time ago, infrequently, and spent little</p>
                    <h3 className="text-15 grow"> Marketing </h3>
                    <p>  Don’t spend too much trying to re-acquire, but you can offer inexpensive incentives or encourage them to join your loyalty program by offering points on sign-up</p>
                    <br></br>

                    <h5 className="text-18 grow"> Others </h5>
                    <h3 className="text-15 grow"> Description </h3>
                    <p>  Diverse group of customers with varying engagement levels.</p>
                    <h3 className="text-15 grow"> Marketing </h3>
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
