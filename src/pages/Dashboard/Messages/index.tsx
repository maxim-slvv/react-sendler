import { Link } from 'react-router-dom';

import { Title } from '../../../components/DashBoardComponent/Title';
import { CardAction } from '../../../components/DashBoardComponent/CardActions';

import style from '../index.module.scss';

export const Messages: React.FC = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Письма" />
          <div className={style.actions}>
            <Link to="/new-message">
              <CardAction title={'Создать письмо'} color={'green'} icon={'add'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
