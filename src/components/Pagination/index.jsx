import React from 'react';

import style from './Pagination.module.scss';

export const Pagination = ({ props }) => {
  return (
    <div className={style.box}>
      <p>
        {props[0]} / {props[1]}
      </p>
    </div>
  );
};
