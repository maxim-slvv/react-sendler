import React from 'react';

import style from './ReCall.module.scss';

export const ReCallCard = ({ name, text, data, avatar }) => {
  return (
    <div className={style.box}>
      <div class={style.testimonial}>
        <div class={style.testimonialBody}>
          <p>{text}</p>
        </div>
        <div class={style.testimonialFooter}>
          <img src={avatar} alt="user" />
          <h3>{name}</h3>
          <h4>Дата регистрации {data}</h4>
        </div>
      </div>
    </div>
  );
};
