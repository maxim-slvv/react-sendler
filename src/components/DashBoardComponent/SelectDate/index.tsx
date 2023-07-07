import React, { useState } from 'react';
import { format, subDays, startOfDay } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import style from './SelectDate.module.scss';

export const SelectDate = () => {
  const [range, setRange] = useState(null);

  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(null);

  // Функция-предикат, которая отключает все дни, предшествующие текущей дате
  function isPastDay(day) {
    return startOfDay(day) < startOfDay(new Date());
  }

  function handleDayClick(day, modifiers) {
    if (modifiers.disabled) {
      return;
    }
    setSelectedDay(day);
  }

  let footer = <p>выберите даты рассылки Доступно 6 дней</p>;
  if (range?.from) {
    if (!range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}
          <button onClick={() => setRange([])}>Очистить</button>
        </p>
      );
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
          <button onClick={() => setRange([])}>Очистить</button>
        </p>
      );
    }
  }

  return (
    <div className={style.DayPicker}>
      <DayPicker
        defaultMonth={new Date()}
        mode="range"
        min={2}
        max={6}
        selected={range}
        onSelect={setRange}
        footer={footer}
        onDayClick={handleDayClick}
        disabled={isPastDay}
      />
    </div>
  );
};
