import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import Widgets1 from './Widgets1'
import Widgets2 from './Widgets2';
import EmployeePerformance from './EmployeePerformance';
import UpcomingScheduled from './UpcomingScheduled';
import TotalProjects from './TotalProjects';
import UpcomingInterview from './UpcomingInterview';
import RecentPayroll from './RecentPayroll';

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
            </div>2
        </React.Fragment>
    );
};

export default HRDashboard;
