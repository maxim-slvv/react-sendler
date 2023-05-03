import React from 'react';

import style from './NewEmailSendings.module.scss';
import { Title } from '../../../../components/DashBoardComponent/Title';
import { CardAction } from '../../../../components/DashBoardComponent/CardActions';
import { SubjectInput } from '../../../../components/SubjectInput';
import { Button } from '../../../../components/DashBoardComponent/Button';
import { MailEditor } from '../../../../components/DashBoardComponent/MailEditor';

export const NewEmailSendings: React.FC = () => {
  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Новая Email Рассылка" />
          <section className={style.actions}>
            <CardAction title={'Выбрать получателей'} color={'darkblue'} icon={'add'} />
            <CardAction title={'Выбрать письмо'} color={'violet'} icon={'add'} />
          </section>
          <div className={style.form}>
            <SubjectInput />
            <MailEditor />
            <Button text={'Отправить'} color={'green'} />
          </div>
        </div>
      </div>
    </div>
  );
};
