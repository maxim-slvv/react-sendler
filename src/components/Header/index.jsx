import React from 'react';
import { DropMenu } from '../DropMenu/index';
import logo from '../../assets/img/logo.svg';
import style from './Header.module.scss';

export const Header = () => {
  const [isHidden, setIsHidden] = React.useState('hidden');

  const Hover = () => {
    isHidden ? setIsHidden('') : setIsHidden('hidden');
  };

  return (
    <header className={style.header}>
      <div className="__container">
        <div className={style.box}>
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={style.user_name}>
            <label>UserName</label>
          </div>
          <div onClick={() => Hover()} className={style.drop_menu}>
            <span>Возможности</span>
            <div className={isHidden}>
              <DropMenu props={['Email рассылка', 'WhatsApp рассылка']} />
            </div>
          </div>
          <div className={style.link}>
            <span>О нас</span>
          </div>
          <div className={style.link}>
            <span>Контакты</span>
          </div>
          <div className={style.link}>
            <span>Вход/Регистрация</span>
          </div>
        </div>
      </div>
    </header>
  );
};
