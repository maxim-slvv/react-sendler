import React from 'react';

import logo from '../../assets/img/header/logo.svg';

import { Link, useLocation } from 'react-router-dom';
import { PopupStart } from './PopupStart';
import { PopupUser } from './PopupUser';
import { PopupMobileInfo } from './PopupMobileInfo';

import './Header.module.scss';
import style from './Header.module.scss';

export const Header = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const Burger = () => {
    return (
      <nav className={isOpen ? style.burgerOpen : style.burger}>
        <div className={style.burgerItems}>
          <Link to={'/dashboard'} onClick={() => setIsOpen(false)}>
            <span
              className={
                location.pathname === '/dashboard' ? style.burgerItemActive : style.burgerItem
              }>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2zm6-5h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V5a2 2 0 012-2zM8 14H5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2zm8 0h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3a2 2 0 012-2z"></path>
              </svg>
              Дашборд
            </span>
          </Link>
          <Link to={'/sendings'}>
            <span
              className={
                location.pathname === '/sendings' ? style.burgerItemActive : style.burgerItem
              }
              onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 10.329v-.32a2 2 0 011.998-2.003h1.179A2.997 2.997 0 0022 7.004a2.997 2.997 0 00-5.823-1.001h-1.18a4 4 0 00-3.936 3.375c.71.164 1.373.49 1.938.951zm8.992 6.69a2.997 2.997 0 00-5.815-1.002h-1.18A2 2 0 0113 14.014a3.008 3.008 0 00-.78-2.003 2.994 2.994 0 00-2.217-1.001H7.824A2.997 2.997 0 002 12.01a2.997 2.997 0 005.824 1.001h2.178A1 1 0 0111 14.015a4.001 4.001 0 003.997 4.006h1.179a2.996 2.996 0 005.815-1.002zM5.006 13.012a1 1 0 01-1-1.002 1 1 0 111 1.002zm12.989 4.005a1 1 0 102 .003 1 1 0 00-2-.003zm1.998-10.014a1 1 0 10-2-.002 1 1 0 002 .002z"></path>
              </svg>
              Рассылки
            </span>
          </Link>
          <Link to={'/messages'}>
            <span
              className={
                location.pathname === '/messages' ? style.burgerItemActive : style.burgerItem
              }
              onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 15V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2zm-9-2a2.83 2.83 0 01-1.65-.52L3 8.73V6.6l6.35 4.45c.39.271.91.271 1.3 0L17 6.6v2.13l-5.35 3.75A2.83 2.83 0 0110 13zm11 4V7a2 2 0 012 2v8a4 4 0 01-4 4H7a2 2 0 01-2-2h14a2 2 0 002-2z"></path>
              </svg>
              Письма
            </span>
          </Link>
          <Link to={'/contacts'}>
            <span
              className={
                location.pathname === '/contacts' ? style.burgerItemActive : style.burgerItem
              }
              onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.003 8a3 3 0 11-6 0 3 3 0 016 0zm4.501-1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-2.05 7.66A3.001 3.001 0 0011.763 13H6.24a3.001 3.001 0 00-2.69 1.66L2.11 17.55A1 1 0 003 19h12.004a1 1 0 00.89-1.45l-1.44-2.89zm6.492.99l.95 1.9a1 1 0 01-.89 1.45h-3.171a3 3 0 00-.15-2.34L16.355 14h1.91c1.133 0 2.17.638 2.68 1.65z"></path>
              </svg>
              Контакты
            </span>
          </Link>
          <Link to={'/templates'}>
            <span
              className={
                location.pathname === '/templates' ? style.burgerItemActive : style.burgerItem
              }
              onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1 7.76A4 4 0 008.24 5.9.44.44 0 018 5.53v-.06a.44.44 0 01.24-.37 4 4 0 001.85-1.85.46.46 0 01.82 0 4 4 0 001.85 1.85.44.44 0 01.24.37v.06a.44.44 0 01-.24.37 4 4 0 00-1.86 1.86.44.44 0 01-.37.24h-.06a.44.44 0 01-.37-.24zM5.27 20.85L16.85 9.27a.5.5 0 000-.71l-1.41-1.41a.5.5 0 00-.71 0L3.15 18.73a.5.5 0 000 .71l1.41 1.41a.5.5 0 00.71 0zM20.82 4.68a3.19 3.19 0 01-1.49-1.48A.38.38 0 0019 3a.38.38 0 00-.33.2 3.17 3.17 0 01-1.48 1.48A.3.3 0 0017 5a.3.3 0 00.19.29 3.21 3.21 0 011.49 1.49.34.34 0 00.62.04 3.17 3.17 0 011.49-1.49A.34.34 0 0021 5a.34.34 0 00-.18-.32zM18.1 15.76a4 4 0 00-1.86-1.86.44.44 0 01-.24-.37v-.06a.44.44 0 01.24-.37 4 4 0 001.85-1.85.46.46 0 01.82 0 4 4 0 001.85 1.85.44.44 0 01.24.37v.06a.44.44 0 01-.24.37 4 4 0 00-1.86 1.86.44.44 0 01-.37.24h-.06a.44.44 0 01-.37-.24z"></path>
              </svg>
              Шаблоны
            </span>
          </Link>
        </div>
        <div className={style.border}></div>
      </nav>
    );
  };

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className="__container">
          <div className={style.box}>
            <div
              ref={menuRef}
              onClick={() => setIsOpen((prev) => !prev)}
              className={style.burgerButton}>
              {isOpen ? (
                <svg className={style.closeIcon} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.85 16.44a.5.5 0 010 .71l-.7.7a.5.5 0 01-.71 0L12 13.41l-4.44 4.44a.5.5 0 01-.71 0l-.7-.7a.5.5 0 010-.71L10.59 12 6.15 7.56a.5.5 0 010-.71l.7-.7a.5.5 0 01.71 0L12 10.59l4.44-4.44a.5.5 0 01.71 0l.7.7a.5.5 0 010 .71L13.41 12l4.44 4.44z"
                    fill="CurrentColor"></path>
                </svg>
              ) : (
                <svg className={style.openIcon} viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 3h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 5h3V5H5v3zm14-5h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2zm-3 5h3V5h-3v3zm-6 8a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3zm-5 3h3v-3H5v3zm14-5h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2zm-3 5h3v-3h-3v3z"
                    fill="#464a61"></path>
                </svg>
              )}
            </div>
            <div className={style.logo}>
              <Link to={'/'}>
                <img className={style.logoImg} src={logo} alt="" />
              </Link>
            </div>
            <div className={style.popupFlex}>
              <PopupStart />
            </div>
            <PopupUser />
            <PopupMobileInfo />
          </div>

          {Burger()}
        </div>
      </header>
    </div>
  );
};
