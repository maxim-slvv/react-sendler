import React from 'react';

import style from './SortingTools.module.scss';

export const SortingTools: React.FC = () => {
  return (
    <div className={style.sort}>
      {/* //TODO: сделать подгрузку с backend следующих карточек */}
      {/* //TODO: сделать состояние выбранного фильтра */}
      <button type="button" data-filter="all">
        Все
      </button>
      <button type="button" data-filter=".whatsapp">
        WhatsApp
      </button>
      <button type="button" data-filter=".email">
        Email
      </button>
      {/* <div className={style.order}>
        <button type="button" data-sort="order:asc">
          Новые
        </button>
        <button type="button" data-sort="order:descending">
          Старые
        </button>
      </div> */}
    </div>
  );
};
