import React from 'react';

import style from './SubjectInput.module.scss';

interface SubjectInputProps {
  textarea?: 'yes' | 'no';
}

export const SubjectInput: React.FC<SubjectInputProps> = (props) => {
  return (
    <div>
      <form className={style.box}>
        <input type="text" placeholder="Название письма" />
        <input type="text" placeholder="Тема" />
        {props.textarea === 'yes' && <textarea></textarea>}
      </form>
    </div>
  );
};
