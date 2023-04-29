import React from 'react';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="__container">
        <div className={style.left}>
          <ul>
            <li>Политика Cookies</li>
            <li>Правила использования</li>
            <li>Безопасность пользователя</li>
            <li>Политика конфиденциальности</li>
          </ul>
          <span>© 2015 - 2023. SendMail Inc. Все права защищены</span>
        </div>
        <div className={style.right}></div>
      </div>
    </div>
  );
};
