import React from 'react';

import style from './SortingTools.module.scss';

export const SortingTools: React.FC = () => {
  return (
    <div className={style.sort}>
      <button type="button" data-filter="all">
        Все
      </button>
      <button type="button" data-filter=".whatsapp">
        WhatsApp
      </button>
      <button type="button" data-filter=".email">
        Email
      </button>
      <button type="button" data-sort="order:asc">
        Новые
      </button>
      <button type="button" data-sort="order:descending">
        Старые
      </button>
    </div>
  );
};
