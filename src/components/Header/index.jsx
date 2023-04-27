import React from 'react';
//TODO сделать на mouseenter
// import { DropMenu } from '../HomeComponents/DropMenu/index';
import logo from '../../assets/img/home/logo.svg';
import style from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  //TODO сделать на mouseenter

  const [isOpen, setIsOpen] = React.useState(false);

  const Burger = () => {
    return (
      <nav className={style.burger}>
        <div className={style.burgerItems}>
          <span className={style.burgerItem}>
            <label></label>Дашборд
          </span>
          <span className={style.burgerItem}>
            <label></label>Контакты
          </span>
          <span className={style.burgerItem}>
            <label></label>Рассылки
          </span>
          <span className={style.burgerItem}>
            <label></label>Письма
          </span>
          <span className={style.burgerItem}>
            <label></label>Шаблоны
          </span>
        </div>
      </nav>
    );
  };

  return (
    <header className={style.header}>
      <div className="__container">
        <div className={style.box}>
          <div onClick={() => setIsOpen((prev) => !prev)} className={style.burgerButton}>
            {isOpen ? (
              <svg className={style.closeIcon} viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.85 16.44a.5.5 0 010 .71l-.7.7a.5.5 0 01-.71 0L12 13.41l-4.44 4.44a.5.5 0 01-.71 0l-.7-.7a.5.5 0 010-.71L10.59 12 6.15 7.56a.5.5 0 010-.71l.7-.7a.5.5 0 01.71 0L12 10.59l4.44-4.44a.5.5 0 01.71 0l.7.7a.5.5 0 010 .71L13.41 12l4.44 4.44z"
                  fill="#464a61"></path>
              </svg>
            ) : (
              <svg className={style.openIcon} viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 3h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 5h3V5H5v3zm14-5h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2zm-3 5h3V5h-3v3zm-6 8a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3zm-5 3h3v-3H5v3zm14-5h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2zm-3 5h3v-3h-3v3z"
                  fill="#464a61"></path>
              </svg>
            )}
          </div>
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={style.popupFlex}>
            <div className={style.popup}>
              <div className={style.plus}>
                <svg className={style.plusIcon} viewBox="4 4 16 16" fill="none">
                  <path
                    d="M16.85 11.335a.334.334 0 01.335.335v.66a.333.333 0 01-.334.335h-4.186v4.186a.333.333 0 01-.335.335h-.66a.334.334 0 01-.335-.335v-4.186H7.15a.334.334 0 01-.334-.335v-.66a.333.333 0 01.334-.335h4.186V7.15a.333.333 0 01.335-.334h.66a.333.333 0 01.335.334v4.186h4.186z"
                    fill="#ffffff"></path>
                </svg>
              </div>
              <span>Создать рассылку</span>
              <div className={style.arrow}>
                <svg viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2.613 4.553a.333.333 0 00-.473 0l-.707.707a.32.32 0 000 .467l6.127 6.126a.5.5 0 00.353.147h.174a.5.5 0 00.353-.147l6.127-6.126a.32.32 0 000-.467l-.707-.707a.333.333 0 00-.473 0L8 9.94 2.613 4.553z"
                    fill="#464a61"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className={style.user}>
            <div className={style.avatar}></div>
            <div className={style.info}>
              <span className={style.mail}>super-email@gmail.com</span>
              <span className={style.id}>ID: 156486355</span>
            </div>
            <div className={style.arrow}>
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M2.613 4.553a.333.333 0 00-.473 0l-.707.707a.32.32 0 000 .467l6.127 6.126a.5.5 0 00.353.147h.174a.5.5 0 00.353-.147l6.127-6.126a.32.32 0 000-.467l-.707-.707a.333.333 0 00-.473 0L8 9.94 2.613 4.553z"
                  fill="#464a61"></path>
              </svg>
            </div>
          </div>
        </div>
        {Burger()}
      </div>
    </header>
  );
};
