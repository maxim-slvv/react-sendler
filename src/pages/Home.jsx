import React from 'react';

import { Intro } from '../components/Intro';
import { Title } from '../components/Title';
import { SelectSend } from '../components/SelectSend';
import { Steps } from '../components/Steps';
import { ReCall } from '../components/ReCall';

export const Home = () => {
  return (
    <div>
      <Intro />
      <Title text={'Пользуйтесь лучшими сервисами вместе с нами'} />
      <SelectSend />
      <Title text={'15 минут и рассылка готова'} />
      <Steps />
      <Title text={'Отзывы наших пользователей'} />
      <ReCall />
      <Title text={'Регистрируйтесь сейчас и получайте бонус'} />
    </div>
  );
};
