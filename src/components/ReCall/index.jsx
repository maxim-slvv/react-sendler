import React from 'react';

import style from './ReCall.module.scss';

import { ReCallCard } from './ReCallCard';

const reCalls = [
  {
    name: 'Вячеслав Щербаков',
    text: '"Очень удобный сервис рассылки! Легко настроить и получать отчеты о доставке. Рекомендую!"',
    data: '5.12.2022',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Андрей Ушенин',
    text: '"Я доволен результатами работы этого сервиса рассылки. Мои письма доставлены вовремя и были прочитаны."',
    data: '8.11.2022',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Денис Алексеев',
    text: '"Сервис рассылки - отличный выбор для моего бизнеса. С ним у меня больше времени на другие задачи."',
    data: '19.12.2022',
    avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    name: 'Антон Безруков',
    text: '"Быстрая и качественная доставка писем благодаря этому сервису рассылки. Спасибо!"',
    data: '13.11.2022',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
  },
];

export const ReCall = () => {
  return (
    <div className="__container">
      <div className={style.box}>
        {reCalls.map((e, i) => {
          return (
            <ReCallCard
              key={i}
              name={reCalls[i].name}
              text={reCalls[i].text}
              data={reCalls[i].data}
              avatar={reCalls[i].avatar}
            />
          );
        })}
      </div>
    </div>
  );
};
