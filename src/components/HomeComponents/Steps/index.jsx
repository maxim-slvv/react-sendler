import React from 'react';

import { HoverCard } from '../../HomeComponents/HoverCard/index';

import style from './Steps.module.scss';

const steps = [
  {
    name: 'Зарегистрироваться на сайте',
    text: 'Заполните форму регистрации, включающую имя, фамилию, адрес электронной почты, пароль и т. д.',
  },
  {
    name: 'Создать списки рассылки',
    text: 'Добавьте адреса получателей, название и описание списка рассылки, а также настройте рассылку',
  },
  {
    name: 'Создать и отправить письмо',
    text: 'Выберите список рассылки, куда отправлять письмо, и отслеживать результаты рассылки',
  },
];

export const Steps = () => {
  return (
    <div className="__container">
      <div className={style.box}>
        <div className={style.items}>
          {steps.map((e, i) => {
            return <HoverCard name={e.name} key={i} text={e.text} number={i + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};
