import React from 'react';

import { Title } from '../../../components/DashBoardComponent/Title';

export const Messages: React.FC = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Письма" />
        </div>
      </div>
    </div>
  );
};
