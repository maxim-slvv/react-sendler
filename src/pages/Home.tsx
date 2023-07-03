import { Link } from 'react-router-dom';

import { HeaderButton } from '../components/Home/HeaderButton';
import { MainButton } from '../components/Home/MainButton';

import style from './Home.module.scss';
import logo from '../assets/img/header/logo.svg';
import bgOne from '../assets/img/home/header/landing_bg1.png';
import illustration from '../assets/img/home/header/illustration.png';

const Home = () => {
  return (
    <>
      <div className={style.box}>
        <div className={style.bgTop}>
          <img className={style.bgImgOne} src={bgOne} alt="" />
          <header className={style.header}>
            <div className={style.container}>
              <nav className={style.nav}>
                <Link to={'/'} className={style.logoImg}>
                  <img src={logo} alt="" />
                </Link>
                <Link className={style.navLink} to={'/'}>
                  <HeaderButton color="white" text="Войти" />
                </Link>
                <Link className={style.navLink} to={'/'}>
                  <HeaderButton color="white" text="Регистрация" />
                </Link>
                <Link className={style.navLink} to={'/dashboard'}>
                  <HeaderButton color="white" text="Личный кабинет" />
                </Link>
              </nav>
            </div>
          </header>
        </div>
        <div>
          <div className={style.container}>
            <main className={style.main}>
              <div className={style.title}>
                <h1>Крупная рекламная сеть</h1>
                <h2>Для покупки и продажи трафика</h2>
                <p>
                  объединяющая вебмастеров, арбитражников, владельцев сайтов и приложений,
                  рекламодателей
                </p>
                <MainButton color="darkblue" text="Зарегистрироваться" />
              </div>
              <div className={style.picture}>
                <img src={illustration} alt="" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
