import React from 'react';

import style from './Button.module.scss';

interface ButtonProps {
  color: 'violet' | 'green' | 'darkblue';
  text: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={style.button}
      style={
        props.color === 'violet'
          ? { backgroundColor: '#852876' }
          : props.color === 'green'
          ? { backgroundColor: '#1db7ad' }
          : props.color === 'darkblue' && { backgroundColor: '#5e33c4' }
      }>
      {props.text}
    </button>
  );
};
