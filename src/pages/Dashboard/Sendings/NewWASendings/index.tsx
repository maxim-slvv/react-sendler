import React from 'react';

import style from './NewWASendings.module.scss';
import { Title } from '../../../../components/DashBoardComponent/Title';
import { CardAction } from '../../../../components/DashBoardComponent/CardActions';
import { SubjectInput } from '../../../../components/SubjectInput';
import { Button } from '../../../../components/DashBoardComponent/Button';

export const NewWASendings: React.FC = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Новая WhatsApp Рассылка" />
          <section className={style.actions}>
            <CardAction title={'Выбрать получателей'} color={'darkblue'} icon={'add'} />
            <CardAction title={'Выбрать письмо'} color={'violet'} icon={'add'} />
          </section>
          <div className={style.box}>
            <SubjectInput textarea={'yes'} />

            <Button text={'Отправить'} color={'green'} />
          </div>
        </div>
      </div>
    </div>
  );
};
