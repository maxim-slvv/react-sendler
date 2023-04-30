import React from 'react';

import { Link } from 'react-router-dom';
import mixitup from 'mixitup';

import { Title } from '../../../components/DashBoardComponent/Title';
import { CardAction } from '../../../components/DashBoardComponent/CardAction';

import style from '../index.module.scss';
import { TitleSmall } from '../../../components/DashBoardComponent/TitleSmall';
import { CardSendings } from '../../../components/DashBoardComponent/CardSendings';

const dataAwait = [
  {
    name: 'Планирование открытия нового офиса',
    date: '01.07.2023',
    state: 'ожидание',
    progress: 0,
    type: 'email',
  },
  {
    name: 'Планирование открытия нового офиса',
    date: '15.07.2023',
    state: 'ожидание',
    progress: 0,
    type: 'whatsapp',
  },
];

const dataComplete = [
  {
    name: 'Организация вечеринки',
    date: '15.07.2023',
    state: 'завершена',
    progress: 100,
    type: 'whatsapp',
  },
  {
    name: 'Заказ билетов в кино',
    date: '01.07.2023',
    state: 'завершена',
    progress: 100,
    type: 'email',
  },
  {
    name: 'Подготовка к экзамену',
    date: '01.08.2023',
    state: 'завершена',
    progress: 100,
    type: 'whatsapp',
  },
  {
    name: 'Обновление сайта',
    date: '01.08.2023',
    state: 'завершена',
    progress: 100,
    type: 'whatsapp',
  },
];

export const Sendings: React.FC = () => {
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
    mixer.filter('.mix');
  }, [containerRef]);

  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Рассылки" />
          <section className={style.actions}>
            <Link to="/new-send">
              <CardAction title={'Создать рассылку'} color={'violet'} icon={'add'} />
            </Link>
          </section>
          <section className={style.sendings}>
            <TitleSmall title="Запланировано" />
            <div className={style.cards}>
              {dataAwait.map((e, i) => {
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
          </section>
          <section className={style.sendings}>
            <TitleSmall title="История рассылок" />
            <div className={style.sort}>
              <button type="button" data-filter="all">
                All
              </button>
              <button type="button" data-filter=".whatsapp">
                WhatsApp
              </button>
              <button type="button" data-filter=".email">
                Email
              </button>
            </div>
            <div ref={containerRef} className="container">
              <div className={style.cards}>
                {dataComplete.map((e, i) => {
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
