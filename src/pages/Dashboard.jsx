import React from 'react';

import { MailingList } from '../components/DashboardComponents/MailingList';
import { Pagination } from '../components/Pagination';

const Dashboard = () => {
  return (
    <div className="__container">
      <Pagination props={['Home', 'Workspaces']} />
      <MailingList />
    </div>
  );
};

export default Dashboard;
