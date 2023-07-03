import React from 'react';

import style from './MainButton.module.scss';
// import { color } from 'framer-motion';

interface ButtonProps {
  color: 'violet' | 'green' | 'darkblue' | 'white';
  text: string;
}

export const MainButton: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={style.button}
      style={
        props.color === 'violet'
          ? { backgroundColor: '#852876' }
          : props.color === 'green'
          ? { backgroundColor: '#1db7ad' }
          : props.color === 'darkblue'
          ? { backgroundColor: '#5e33c4' }
          : props.color === 'white' && { backgroundColor: 'white', color: 'black' }
      }>
      {props.text}
    </button>
  );
};
