import React from 'react';

import style from './MailingList.module.scss';
import { Title } from '../Title';

const data = [
  {
    name: 'Рассылка по контактам',
    data: '18.12.2022',
    message: 'Сообщение №555',
    quantity: '1875',
    status: 'Завершена',
  },
  {
    name: 'Рассылка по контактам',
    data: '18.12.2022',
    message: 'Сообщение №555',
    quantity: '1875',
    status: 'Завершена',
  },
];

export const MainListHeader = () => {
  return (
    <>
      <div className={style.checkbox}>
        <input type="checkbox" />
      </div>
      <div className={style.name}>Название</div>
      <div className={style.data}>Дата</div>
      <div className={style.message}>Сообщение</div>
      <div className={style.quantity}>Количество</div>
      <div className={style.status}>Статус</div>
    </>
  );
};

export const MainListItem = ({ props }) => {
  return (
    <>
      <div className={style.checkbox}>
        <input type="checkbox" />
      </div>
      <div className={style.name}>{props.name}</div>
      <div className={style.data}>{props.data}</div>
      <div className={style.message}>{props.message}</div>
      <div className={style.quantity}>{props.quantity} шт.</div>
      <div className={style.status}>{props.status}</div>
    </>
  );
};

export const MailingList = () => {
  return (
    <div>
      <Title text={'Ваши рассылки'} />
      <div className={style.list}>
        <div className={style.header}>
          <MainListHeader />
        </div>
        {data.map((e) => {
          return (
            <div className={style.items}>
              <MainListItem props={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
