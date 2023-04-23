import React from 'react';

import style from './SelectSend.module.scss';

import mail from '../../../assets/img/home/mail.png';
import whatsApp from '../../../assets/img/home/whatsApp.png';

export const SelectSend = () => {
  return (
    <div className="__container">
      <div className={style.box}>
        <div className="card3">
          <div className={style.item}>
            <img src={mail} alt="" />
            <p>
              <label>Email</label>
              <span>Рассылка</span>
            </p>
            <button className="red__button">Начать бесплатно</button>
          </div>
        </div>
        <div className="card3">
          <div className={style.item}>
            <img className={style.whatsapp} src={whatsApp} alt="" />
            <p>
              <label>WhatsApp</label>
              <span>Рассылка</span>
            </p>
            <button className="red__button">Начать бесплатно</button>
          </div>
        </div>
      </div>
    </div>
  );
};
