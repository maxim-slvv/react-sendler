import { Link } from 'react-router-dom';

import { Title } from '../../../components/DashBoardComponent/Title';
import { CardAction } from '../../../components/DashBoardComponent/CardActions';

import style from '../index.module.scss';

export const Templates: React.FC = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Шаблоны" />
          <div className={style.actions}>
            <Link to="/new-wa-template">
              <CardAction title={'WhatsApp шаблон'} color={'green'} icon={'add'} />
            </Link>
            <Link to="/new-email-template">
              <CardAction title={'Email шаблон'} color={'darkblue'} icon={'add'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
