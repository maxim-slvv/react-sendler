import React from 'react';

import style from './Title.module.scss';
import '../../../scss/index.scss';

export const Title = ({ text }) => {
  return (
    <div className={style.dashboard}>
      <h3>{text}</h3>
    </div>
  );
};
