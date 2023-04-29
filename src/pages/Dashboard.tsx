import React from 'react';

import { Title } from '../components/DashBoardComponent/Title';

const Dashboard = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title text="Обзор" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
