import React from 'react';
// import { useForm } from 'react-hook-form';

import { AppDispatch } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { authState, setAuthClose } from '../../../redux/slices/HomeAuthClick';
import { requestUserCreate } from '../../../redux/slices/user/UserCreate';

import { MainButton } from '../MainButton';
import style from './AuthForm.module.scss';
import closeBtn from '../../../assets/img/home/closeBtn.svg';

interface AuthFormProps {
  type: 'reg' | 'auth';
}

export const AuthForm: React.FC<AuthFormProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthOpen = useSelector(authState);

  const authClickClose = () => {
    dispatch(setAuthClose());
  };

  let UserCreateFunc = () => {
    dispatch(
      requestUserCreate({
        email: 'andrey3kulagin@gmail.com',
        password: 'qwer1234',
        confirm_password: 'qwer1234',
        username: 'andrey3kulagin',
        phone: '89863272323',
        field_of_activity: 'услуги логистики с Китаем',
      }),
    );
  };

  //*-----------------------ФОРМА АВТОРИЗАЦИИ-----------------------*
  const auth = () => {
    return <>авторизация</>;
  };
  //*-----------------------ФОРМА РЕГИСТРАЦИИ-----------------------*
  // const [formData, setFormData] = React.useState({});
  //?---------------Данные форм
  const [emailData, setEmailData] = React.useState('');
  const [nameData, setNameData] = React.useState('');
  const [numberData, setNumberData] = React.useState('');
  const [passwordData, setPasswordData] = React.useState('');
  const [password2Data, setPassword2Data] = React.useState('');
  //?---------------При Изменении данных поля
  const emailHandler = (e) => {
    setEmailData(e.target.value);
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Не корректный Email');
    } else {
      setEmailError('');
    }
  };
  //?---------------Состояния
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [nameDirty, setNameDirty] = React.useState(false);
  const [numberDirty, setNumberDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [password2Dirty, setPassword2Dirty] = React.useState(false);
  //?---------------Обязательные параметры
  const [emailError, setEmailError] = React.useState('Email не может быть пустым');
  //?---------------Blur - когда убрали курсор
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);

        break;
      case 'name':
        setNameDirty(true);
        break;
      case 'number':
        setNumberDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'password2':
        setPassword2Dirty(true);
        break;
    }
  };

  const reg = () => {
    return (
      <>
        <h3>Регистрация</h3>
        <div className={style.authForms}>
          <div className={style.inputWrapper}>
            {/*//? если мы нажали на email и в нем есть ошибка то мы создаем блок с ошибкой */}
            {/*//TODO: спозиционировать надпись */}
            {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
            <input
              onChange={(e) => emailHandler(e)}
              value={emailData}
              onBlur={(e) => blurHandler(e)}
              name="email"
              style={{ border: '1px solid red' }}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className={style.inputWrapper}>
            <input
              onBlur={(e) => blurHandler(e)}
              name="name"
              style={{}}
              type="text"
              placeholder="Имя пользователя"
            />
          </div>
          <div className={style.inputWrapper}>
            <input
              onBlur={(e) => blurHandler(e)}
              name="number"
              style={{}}
              type="number"
              placeholder="Номер телефона"
            />
          </div>
          <div className={style.inputWrapper}>
            <input
              onBlur={(e) => blurHandler(e)}
              name="password"
              style={{}}
              type="password"
              placeholder="Пароль"
            />
          </div>
          <div className={style.inputWrapper}>
            <input
              onBlur={(e) => blurHandler(e)}
              name="password2"
              style={{}}
              type="password"
              placeholder="Подтвердите пароль"
            />
          </div>
        </div>
        <button className={style.sendButton} onClick={() => UserCreateFunc()}>
          <MainButton color="darkblue" text="Зарегистрироваться" />
        </button>
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
