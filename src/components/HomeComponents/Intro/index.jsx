import React from 'react';
import style from './Intro.module.scss';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 800, max: 1500 })),
      backgroundColor: '#5175a8',
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 1200, max: 2000 })),
      backgroundColor: '#cb5656',
    },
  ],
};

export const Intro = () => {
  return (
    <div className="background">
      <div className="__container">
        <div className={style.box}>
          <div className={style.info}>
            <h1>Email рассылки для вашего бизнеса</h1>
            <p>Отправляйте красивые письма и привлекайте больше постоянных клиентов</p>
            <div className={style.action}>
              <input type="mail" placeholder="Введите Email" />
              <button className="red__button">Начать бесплатно</button>
            </div>
          </div>
          <div className={style.chart}>
            <Bar options={options} data={data} width={620} height={332} />
          </div>
        </div>
      </div>
    </div>
  );
};
