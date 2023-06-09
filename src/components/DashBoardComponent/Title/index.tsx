import React from 'react';
import style from './Title.module.scss';
import '../../../scss/index.scss';

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <div className={style.box}>
      <h2>{props.title}</h2>
    </div>
  );
};
