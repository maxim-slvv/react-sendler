import React from 'react';
//TODO сделать на mouseenter
// import { DropMenu } from '../HomeComponents/DropMenu/index';
import logo from '../../assets/img/logo.svg';
import style from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  //TODO сделать на mouseenter
  // const [isHidden, setIsHidden] = React.useState('hidden');

  // const Hover = () => {
  //   isHidden ? setIsHidden('') : setIsHidden('hidden');
  // };

  return (
    <header className={style.header}>
      <div className="__container">
        <div className={style.box}>
          <div className={style.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className={style.link}>
            <Link to="/my">
              <span>UserName</span>
            </Link>
          </div>
          {/* 
          <div onClick={() => Hover()} className={style.drop_menu}>
            <span>Возможности</span>
            <div className={isHidden}>
              <DropMenu props={['Email рассылка', 'WhatsApp рассылка']} />
            </div>
          </div> */}
          {location.pathname === '/' && (
            <>
              <div className={style.link}>
                <span>О нас</span>
              </div>
              <div className={style.link}>
                <span>Контакты</span>
              </div>
              <div className={style.link}>
                <span>Вход/Регистрация</span>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
