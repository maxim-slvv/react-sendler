import React from 'react';
import style from './TitleSmall.module.scss';
import '../../../scss/index.scss';

interface TitleProps {
  title: string;
}

export const TitleSmall: React.FC<TitleProps> = (props) => {
  return (
    <div className={style.box}>
      <h3>{props.title}</h3>
    </div>
  );
};
