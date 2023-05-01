import React from 'react';

import style from './NewEmailSendings.module.scss';
import { Title } from '../../../../components/DashBoardComponent/Title';

export const NewEmailSendings = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Новая Email Рассылка" />
          <div className={style.actions}></div>
        </div>
      </div>
    </div>
  );
};
