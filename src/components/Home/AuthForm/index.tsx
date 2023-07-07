import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { authState, setAuthClose } from '../../../redux/slices/HomeAuthClick';
import { MainButton } from '../MainButton';
import style from './AuthForm.module.scss';
import closeBtn from '../../../assets/img/home/closeBtn.svg';

interface AuthFormProps {
  type: 'reg' | 'auth';
}

export const AuthForm: React.FC<AuthFormProps> = (props) => {
  const dispatch = useDispatch();
  const isAuthOpen = useSelector(authState);

  const authClickClose = () => {
    dispatch(setAuthClose());
  };

  const auth = () => {
    return <>авторизация</>;
  };
  const reg = () => {
    return (
      <>
        <h3>Регистрация</h3>
        <div className={style.authForms}>
          <input type="mail" placeholder="Email" />
          <input type="mail" placeholder="Имя пользователя" />
          <input type="mail" placeholder="Номер телефона" />
          <input type="password" placeholder="Пароль" />
          <input type="password" placeholder="Подтвердите пароль" />
        </div>
        //TODO: Создать форму регистрации для сабмита по button //TODO: передать параметры в Redux
        {/* //TODO ------------------dispatch(fetchPizzas({ page, category, sortBy, order, search })); */}
        <MainButton color="darkblue" text="Зарегистрироваться" />
      </>
    );
  };

  return (
    <div className={style.AuthFormBox}>
      <div className={style.AuthForm}>{props.type === 'auth' ? <>{auth()}</> : <>{reg()}</>}</div>
      <img onClick={() => authClickClose()} className={style.closeBtn} src={closeBtn} alt="" />
    </div>
  );
};
