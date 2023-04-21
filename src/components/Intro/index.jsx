import React from 'react';

import style from './Intro.module.scss';

export const Intro = () => {
  return (
    <div className="__container">
      <div className={style.box}>
        <div className={style.info}>
          <h1>Email рассылки для вашего бизнеса</h1>
          <p>Отправляйте красивые письма и привлекайте больше постоянных клиентов</p>
          <div className={style.action}>
            <input type="mail" placeholder="Введите Email" />
            <button className="red__button">Начать бесплатно</button>
          </div>
        </div>
        <div className="chart">
          |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        </div>
      </div>
    </div>
  );
};
