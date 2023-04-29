import React from 'react';

import style from './Sendings.module.scss';
import { Progressbar } from '../Progressbar/index';

interface CardSendingsProps {
  title: string;
  date: string;
  progress: number;
  state: string;
  type: string;
}

export const CardSendings: React.FC<CardSendingsProps> = (props) => {
  return (
    <div className={style.card}>
      <h4 className={style.title}>{props.title}</h4>
      <div className={style.date}>{props.date}</div>
      <div className={style.progress}>{props.state}</div>
      <div className={style.scale}>
        <Progressbar scale={props.progress} />
      </div>

      <label
        style={{
          backgroundColor:
            props.type === 'email' ? '#cc5449' : props.type === 'whatsapp' ? '#1db7ad' : '#b71d1d',
        }}>
        <div className={style.type}>
          <p>
            {props.type === 'email' ? 'Email' : props.type === 'whatsapp' ? 'WhatsApp' : 'Ошибка'}
          </p>
        </div>
      </label>
    </div>
  );
};
