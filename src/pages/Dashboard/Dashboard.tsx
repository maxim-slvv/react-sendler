import React from 'react';
import mixitup from 'mixitup';

import { Link } from 'react-router-dom';

import { Title } from '../../components/DashBoardComponent/Title';
import { CardAction } from '../../components/DashBoardComponent/CardActions';
import { TitleSmall } from '../../components/DashBoardComponent/TitleSmall';
import { CardSendings } from '../../components/DashBoardComponent/CardSendings';

import style from './index.module.scss';
import { SortingTools } from '../../components/DashBoardComponent/SortingTools';

const data = [
  {
    name: 'На день космонавтики',
    date: '10.01.2023',
    state: 'в процессе',
    progress: 60,
    type: 'whatsapp',
  },
  {
    name: 'Список с таргета организаторов',
    date: '14.01.2023',
    state: 'в процессе',
    progress: 10,
    type: 'email',
  },
  {
    name: 'Приглашение на концерт',
    date: '16.01.2022',
    state: 'в процессе',
    progress: 30,
    type: 'whatsapp',
  },
  {
    name: 'Приглашение на концерт',
    date: '15.01.2022',
    state: 'в процессе',
    progress: 30,
    type: 'whatsapp',
  },
  {
    name: 'Список с таргета организаторов',
    date: '13.01.2023',
    state: 'в процессе',
    progress: 10,
    type: 'email',
  },
];

const Dashboard = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    var mixer = mixitup('.container', {
      selectors: {
        target: '.mix',
      },
      animation: {
        duration: 400,
        effectsOut: 'fade translateY(-100%)',

        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    });
    //начальное значение
    //TODO: тут буду делать поиск через поле ввода
    //TODO: сделать проверку - если результатов нету то ничего не выводить
    mixer.filter('.mix');
  }, [containerRef]);

  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Обзор" />
          <section className={style.actions}>
            <Link to="/new-email">
              <CardAction title={'Создать рассылку'} color={'violet'} icon={'add'} />
            </Link>
            <Link to="/import">
              <CardAction title={'Импортировать контакты'} color={'green'} icon={'download'} />
            </Link>
            {/* <Link to="/new-template"> */}
            <CardAction title={`Создать шаблон`} color={'darkblue'} icon={'add'} />
            {/* </Link> */}
          </section>

          <section className={style.sendings}>
            <TitleSmall title="Активные рассылки" />
            <SortingTools />

            <div ref={containerRef} className="container">
              <div className={style.cards}>
                {data.map((e, i) => {
                  return (
                    <CardSendings
                      key={i}
                      num={(i = i + 1)}
                      title={e.name}
                      date={e.date}
                      state={e.state}
                      progress={e.progress}
                      type={e.type}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
