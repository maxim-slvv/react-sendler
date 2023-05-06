import React from 'react';
import axios from 'axios';

import { Title } from '../../../components/DashBoardComponent/Title';

import style from './ImportContacts.module.scss';

export const ImportContacts: React.FC = () => {
  const [drag, setDrag] = React.useState(false);

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };
  const onDropHandler = (e) => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('userId', 'Name');
    setDrag(false);
    // let options = 545;
    axios
      .post('url', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(files);
  };

  return (
    <div className="__container">
      <div className="__contentBOX">
        <div className="__contentSmall">
          <Title title="Импорт" />
          <div className={style.actions}>
            {drag ? (
              <div
                onDragStart={(e) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
                onDrop={(e) => onDropHandler(e)}
                className={style.dropArea}>
                Отпустите для загрузки
              </div>
            ) : (
              <div
                onDragStart={(e) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
                className={style.dropInitial}>
                Перетащите сюда Exel файл
                <br />
                или кликните для выбора файла
                <input className={style.input} type="file"></input>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
