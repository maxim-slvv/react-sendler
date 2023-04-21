import React from 'react';

import style from './SelectSend.module.scss';

import mail from '../../assets/img/mail.png';
import whatsApp from '../../assets/img/whatsapp.png';

export const SelectSend = () => {
  return (
    <div className="__container">
      <div className={style.box}>
        <div className={style.item}>
          <img src={mail} alt="" />
          <p>
            <label>Email</label> Рассылка
          </p>
          <button className="red__button">Начать бесплатно</button>
        </div>
        <div className={style.item}>
          <img src={whatsApp} alt="" />
          <p>
            <label>WhatsApp</label> Рассылка
          </p>
          <button className="red__button">Начать бесплатно</button>
        </div>
      </div>
    </div>
  );
};
