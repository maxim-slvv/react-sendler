import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { authState, setAuthOpen } from '../redux/slices/HomeAuthClick';

import { HeaderButton } from '../components/Home/HeaderButton';
import { MainButton } from '../components/Home/MainButton';
import { OfferListItem } from '../components/Home/OfferListItem';
import { AuthForm } from '../components/Home/AuthForm';

import style from './Home.module.scss';
import logo from '../assets/img/header/logo.svg';
import bgOne from '../assets/img/home/header/landing_bg1.png';
import bgTwo from '../assets/img/home/header/landing_bg2.png';
import illustration from '../assets/img/home/header/illustration.png';
import illustration2 from '../assets/img/home/header/illustration2.png';

const Home = () => {
  const dispatch = useDispatch();
  const isAuthOpen = useSelector(authState);

  const [authType, setAuthType] = React.useState('reg');
  const regClickOpen = () => {
    setAuthType('reg');
    dispatch(setAuthOpen());
  };
  const authClickOpen = () => {
    setAuthType('auth');
    dispatch(setAuthOpen());
  };
  //*запрет прокрутки экрана при открытии меню регистрации и авторизации
  const toggleScrollLock = React.useCallback(() => {
    const bodyElement = document.querySelector('body');
    if (isAuthOpen) {
      bodyElement.style.overflow = 'hidden';
    } else {
      bodyElement.style.overflow = '';
    }
  }, [isAuthOpen]);

  React.useEffect(() => {
    toggleScrollLock();
  }, [isAuthOpen, toggleScrollLock]);

  return (
    <>
      <div className={style.auth} style={isAuthOpen ? {} : { display: 'none' }}>
        <AuthForm type={authType} />
      </div>

      <div className={style.box} style={isAuthOpen ? {} : { overflow: 'hidden' }}>
        <div className={style.bgTop}>
          <img className={style.bgImgOne} src={bgOne} alt="" />
          <img className={style.bgImgTwo} src={bgTwo} alt="" />
          <header className={style.header}>
            <div className={style.container}>
              <nav className={style.nav}>
                <Link to={'/'} className={style.logoImg}>
                  <img src={logo} alt="" />
                </Link>
                {/* <Link className={style.navLink} style={{ paddingRight: '15px' }} to={'/dashboard'}>
                  <HeaderButton color="green" text="войти как ADMIN" />
                </Link> */}
                <button
                  style={{ border: '0px', backgroundColor: 'inherit' }}
                  onClick={() => authClickOpen()}>
                  <HeaderButton color="white" text="Войти" />
                </button>
              </nav>
            </div>
          </header>
        </div>

        <div className={style.containerNotRight}>
          <main className={style.main}>
            <div className={style.title}>
              <h1>Крупная рекламная сеть</h1>
              <h2>Для покупки и продажи трафика</h2>
              <p>
                объединяющая вебмастеров, арбитражников, владельцев сайтов и приложений,
                рекламодателей
              </p>
              <div className={style.pictureHidden}>
                <img src={illustration} alt="" />
              </div>
              <div onClick={() => regClickOpen()} className={style.button}>
                <MainButton color="darkblue" text="Зарегистрироваться" />
              </div>
            </div>
            <div className={style.picture}>
              <img src={illustration} alt="" />
            </div>
          </main>
        </div>

        <div className={style.offer}>
          <div className={style.container}>
            <div className={style.offerBox}>
              <div className={style.picture}>
                <img src={illustration2} alt="" />
              </div>
              <div className={style.list}>
                <OfferListItem h2="WhatsApp, Email рассылка" p="Для вашего бизнеса" img={1} />
                <OfferListItem h2="Множество готовых шаблонов" p="Для быстрого начала" img={4} />
                <OfferListItem h2="Качественную рассылку" p="Для повышения охвата" img={3} />
                <OfferListItem h2="Планирование отправки" p="Для вашего удобства" img={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
