import { Link } from 'react-router-dom';

import { Title } from '../../../components/DashBoardComponent/Title';
import { CardAction } from '../../../components/DashBoardComponent/CardAction';

import style from '../index.module.scss';

export const Sendings: React.FC = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Рассылки" />
          <div className={style.actions}>
            <Link to="/new-send">
              <CardAction title={'Создать рассылку'} color={'violet'} icon={'add'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
