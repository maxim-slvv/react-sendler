import React from 'react';

import style from './CardAction.module.scss';
import './cardMix.scss';

interface CardActionProps {
  title: string;
  icon: 'add' | 'download';
  color: 'violet' | 'green' | 'orange';
}

export const CardAction: React.FC<CardActionProps> = (props) => {
  return (
    <div
      className={style.card}
      style={
        props.color === 'violet'
          ? { backgroundColor: '#852876' }
          : props.color === 'green'
          ? { backgroundColor: '#1db7ad' }
          : props.color === 'orange' && { backgroundColor: '#cc5449' }
      }>
      <div className={style.title}>{props.title}</div>
      <div className={style.icon}>
        <svg viewBox="0 0 32 32" fill="none">
          <path
            fill={'#fff'}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d={
              props.icon === 'add'
                ? 'M2.667 16C2.667 8.636 8.637 2.667 16 2.667A13.333 13.333 0 0129.333 16c0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333zm18 1.333a.667.667 0 00.666-.666v-1.334a.667.667 0 00-.666-.666h-3.334v-3.334a.667.667 0 00-.666-.666h-1.334a.667.667 0 00-.666.666v3.334h-3.334a.667.667 0 00-.666.666v1.334c0 .368.298.666.666.666h3.334v3.334c0 .368.298.666.666.666h1.334a.667.667 0 00.666-.666v-3.334h3.334z'
                : 'M15.733 22.667c-.266 0-.533-.134-.666-.267l-6.8-6.933a.645.645 0 010-.934L9.2 13.6c.133-.267.667-.267.933.133l4.534 4.534v-13.6c0-.4.266-.667.666-.667h1.334c.4 0 .666.267.666.667v13.6l4.534-4.534a.645.645 0 01.933 0l.933.934a.644.644 0 010 .933l-6.8 6.8c-.133.133-.4.267-.666.267h-.534zm12.267-2v4.666C28 26.8 26.8 28 25.333 28H6.667A2.675 2.675 0 014 25.333v-4.666c0-.4.267-.667.667-.667H6c.4 0 .667.267.667.667v4.666h18.666v-4.666c0-.4.267-.667.667-.667h1.333c.4 0 .667.267.667.667z'
            }></path>
        </svg>
      </div>
    </div>
  );
};
