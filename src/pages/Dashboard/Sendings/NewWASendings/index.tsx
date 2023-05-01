import React from 'react';

import style from './NewWASendings.module.scss';
import { Title } from '../../../../components/DashBoardComponent/Title';

export const NewWASendings = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Новая WhatsApp Рассылка" />
          <div className={style.actions}></div>
        </div>
      </div>
    </div>
  );
};
