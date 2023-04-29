import { Link } from 'react-router-dom';

import { Title } from '../../components/DashBoardComponent/Title';
import { CardAction } from '../../components/DashBoardComponent/CardAction';
import { TitleSmall } from '../../components/DashBoardComponent/TitleSmall';
import { CardSendings } from '../../components/DashBoardComponent/CardSendings';

import style from './index.module.scss';

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
    date: '16.01.2022',
    state: 'в процессе',
    progress: 30,
    type: 'whatsapp',
  },
  {
    name: 'Список с таргета организаторов',
    date: '14.01.2023',
    state: 'в процессе',
    progress: 10,
    type: 'email',
  },
];

const Dashboard = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Обзор" />
          <section className={style.actions}>
            <Link to="/new-send">
              <CardAction title={'Создать рассылку'} color={'violet'} icon={'add'} />
            </Link>
            <Link to="/new-import">
              <CardAction title={'Импортировать контакты'} color={'green'} icon={'download'} />
            </Link>
            <Link to="/new-template">
              <CardAction title={`Создать шаблон`} color={'orange'} icon={'add'} />
            </Link>
          </section>
          <section className={style.sendings}>
            <TitleSmall title="Активные рассылки" />
            <div className={style.cards}>
              {data.map((e, i) => {
                return (
                  <CardSendings
                    key={i}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;