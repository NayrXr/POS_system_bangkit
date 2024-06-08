import React from 'react';
import { SubscriptionChart } from './Charts';

const Subscription = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-3 text-15">Subscription Distribution</h6>
                    <SubscriptionChart chartId="subscriptionDistribution" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Subscription;
