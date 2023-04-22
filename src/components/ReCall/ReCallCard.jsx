import React from 'react';

export const ReCallCard = ({ name, text, data, avatar }) => {
  return (
    <div class="testimonial">
      <div class="testimonial-body">
        <p>{text}</p>
      </div>
      <div class="testimonial-footer">
        <img src={avatar} alt="user" />
        <h3>{name}</h3>
        <h4>Дата регистрации {data}</h4>
      </div>
    </div>
  );
};
