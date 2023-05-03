import React from 'react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import style from './MailEditor.module.scss';

export const MailEditor: React.FC = () => {
  const OnChangeInput = (event): void => {
    console.log(event && event);
  };

  return (
    <div className={style.box}>
      <CKEditor
        editor={ClassicEditor}
        data={'<h2>Шаблон письма №1</h2>'}
        //@ts-ignore
        onInit={(editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          OnChangeInput(data);
        }}
        config={{
          ckfinder: {
            uploadUrl: '/uploads',
          },
        }}
      />
    </div>
  );
};
