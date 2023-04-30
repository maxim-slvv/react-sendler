import React from 'react';

import style from './CardContacts.module.scss';
import '../../../scss/index.scss';

const arr = Array.from({ length: 10 });

export const CardContacts = () => {
  return (
    <div className={style.box}>
      <div className={style.header}>
        <div className={style.checkbox}>
          <input type="checkbox" />
        </div>
        <div className={style.name}>Название</div>
        <div className={style.data}>Дата</div>
        <div className={style.quantity}>Группа</div>
      </div>
      {/* Контейнер, флеск контейнер и карточки */}
      <div className="container">
        <div className={style.cards}>
          {arr.map((e, i) => {
            return (
              <div className="cardMix">
                <div className={style.carditem}>
                  <div className={style.checkbox}>
                    {/* можно управлять выбран или нет */}
                    <input type="checkbox" />
                  </div>
                  <div className={style.name}>unicorn@gmail.com</div>
                  <div className={style.data}>15.05.2023</div>
                  <div className={style.quantity}>Вне списков</div>
                  <button className={style.buttonEdit}>Редактировать</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
