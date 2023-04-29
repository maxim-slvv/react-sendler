import React, { useState, useEffect } from 'react';

import style from './Progressbar.module.scss';

interface ProgressbarProps {
  scale: number;
}

export const Progressbar: React.FC<ProgressbarProps> = ({ scale }) => {
  return (
    <div>
      <div className={style.progressbar}>
        <div
          style={{
            height: '100%',
            width: `${scale}%`,
            backgroundColor: '#00800096',
            transition: 'width 0.5s',
          }}></div>
        <span className={style.progressPercent}>{scale}%</span>
      </div>
    </div>
  );
};
