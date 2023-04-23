import React from 'react';
import style from './HoverCard.module.scss';

import registration from '../../assets/img/registration.svg';
import settings from '../../assets/img/settings.svg';
import complete from '../../assets/img/complete.svg';

export const HoverCard = ({ name, text, number }) => {
  return (
    <div className={style.card}>
      <div class="containerHoverCard">
        <div class="card1">
          <h3>{name}</h3>
          <p class="small">{text}</p>
          <span></span>
          <div className={style.image}>
            <img
              src={
                (number === 1 && registration) ||
                (number === 2 && settings) ||
                (number === 3 && complete)
              }
              alt=""
            />
          </div>
          <div class="go-corner">
            <div class="go-arrow">{number}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
