import React from 'react';

import { Intro } from '../components/HomeComponents/Intro';
import { Title } from '../components/HomeComponents/Title';
import { SelectSend } from '../components/HomeComponents/SelectSend';
import { Steps } from '../components/HomeComponents/Steps';
import { ReCall } from '../components/HomeComponents/ReCall';
import { Accordeon } from '../components/HomeComponents/Accordeon';

const Home = () => {
  return (
    <div>
      <Intro />
      <Title text={'15 минут и рассылка готова'} />
      <Steps />
      <Title text={'Пользуйтесь лучшими сервисами вместе с нами'} />
      <SelectSend />
      <Title text={'Отзывы наших пользователей'} />
      <ReCall />
      <Title text={'FAQ'} />
      <Accordeon />
      <Title text={'Регистрируйтесь сейчас и получайте бонус'} />
    </div>
  );
};
export default Home;
