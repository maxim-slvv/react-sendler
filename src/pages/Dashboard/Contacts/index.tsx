import { Link } from 'react-router-dom';

import { Title } from '../../../components/DashBoardComponent/Title';
import { CardAction } from '../../../components/DashBoardComponent/CardActions';
import { CardContacts } from '../../../components/DashBoardComponent/CardContacts';
import { TitleSmall } from '../../../components/DashBoardComponent/TitleSmall';

import style from '../index.module.scss';

export const Contacts: React.FC = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Контакты" />
          <div className={style.actions}>
            <Link to="/new-import">
              <CardAction title={'Импортировать контакты'} color={'green'} icon={'download'} />
            </Link>
            <Link to="/new-contact">
              <CardAction title={`Добавить вручную`} color={'orange'} icon={'add'} />
            </Link>
          </div>
          <TitleSmall title="Списки" />
          <CardContacts />
        </div>
      </div>
    </div>
  );
};
