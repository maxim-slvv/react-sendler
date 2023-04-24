import React from 'react';

import style from './Title.module.scss';

export const Title = ({ text }) => {
  return (
    <div className={style.title}>
      <h2>{text}</h2>
    </div>
  );
};
