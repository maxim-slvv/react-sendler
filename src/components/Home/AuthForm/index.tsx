import React from 'react';
import { AppDispatch } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { setAuthClose } from '../../../redux/slices/HomeAuthClick';
import { UserCreateParams, requestUserCreate } from '../../../redux/slices/user/UserCreate';
import { tokenParams, requestGetToken } from '../../../redux/slices/auth/AuthGetToken';

import { MainButton } from '../MainButton';

import style from './AuthForm.module.scss';
import closeBtn from '../../../assets/img/home/closeBtn.svg';

interface AuthFormProps {
  type: string;
}

export const AuthForm: React.FC<AuthFormProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const authClickClose = () => {
    dispatch(setAuthClose());
  };
  //В следующтий раз буду использовать Либы для валидации, просто нужно было для себя разобраться как там под капотом
  //!-----------------------ФОРМА РЕГИСТРАЦИИ-----------------------*
  let UserCreateFunc = () => {
    dispatch(
      requestUserCreate({
        email: emailData,
        password: passwordData,
        confirm_password: password2Data,
        username: nameData,
        phone: numberData,
      } as UserCreateParams),
    );
  };
  //?---------------Данные форм
  const [emailData, setEmailData] = React.useState('');
  const [nameData, setNameData] = React.useState('');
  const [numberData, setNumberData] = React.useState('');
  const [passwordData, setPasswordData] = React.useState('');
  const [password2Data, setPassword2Data] = React.useState('');

  //?---------------Состояния
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [password2Dirty, setPassword2Dirty] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  //?---------------Параметры ошибки
  const [emailError, setEmailError] = React.useState(' ');
  const [passwordError, setPasswordError] = React.useState(' ');
  const [password2Error, setPassword2Error] = React.useState(' ');

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

  const nameHandler = (e) => {
    setNameData(e.target.value);
  };
  const numberHandler = (e) => {
    setNumberData(e.target.value);
  };

  const passwordHandler = (e) => {
    setPasswordData(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 20) {
      setPasswordError('Пароль должен быть длинее 8 символов и не более 20');
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const password2Handler = (e) => {
    setPassword2Data(e.target.value);
    if (!e.target.value) {
      setPassword2Error('Пароль не может быть пустым');
    } else {
      setPassword2Error('');
    }
  };

  React.useEffect(() => {
    if (passwordData !== password2Data) {
      setPassword2Error('Пароли не совпадают');
    } else {
      setPassword2Error('');
    }
  }, [passwordData, password2Data]);

  //?---------------Blur - когда убрали курсор
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        if (!emailData) {
          setEmailError('Email не может быть пустым');
        }
        break;
      case 'password':
        setPasswordDirty(true);
        if (!passwordData) {
          setPasswordError('Пароль не может быть пустым');
        }
        break;
      case 'password2':
        setPassword2Dirty(true);
        if (!password2Data) {
          setPassword2Error('Пароль не может быть пустым');
        }
        break;
    }
  };

  React.useEffect(() => {
    if (emailError || passwordError || password2Error) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, password2Error]);

  //TODO: использовать состояния ENUMS
  //TODO: в случае 201 - очищать форму и вывод успешной регистрации, в случае 400 - показывать ошибку
  //TODO: проверять на лету? что email занят, телефон уже используется, имя пользователя занято?

  const reg = () => {
    return (
      <>
        <h3>Регистрация</h3>
        <div className={style.authForms}>
          <div className={style.inputWrapper}>
            {emailDirty && emailError && <div className={style.errorMessage}>{emailError}</div>}
            <input
              onChange={(e) => emailHandler(e)}
              value={emailData}
              onBlur={(e) => blurHandler(e)}
              name="email"
              style={emailDirty && emailError ? { border: '1px solid red' } : {}}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className={style.inputWrapper}>
            <input
              onChange={(e) => nameHandler(e)}
              onBlur={(e) => blurHandler(e)}
              name="name"
              type="text"
              placeholder="Имя пользователя (не обязательно)"
            />
          </div>
          <div className={style.inputWrapper}>
            <input
              onChange={(e) => numberHandler(e)}
              onBlur={(e) => blurHandler(e)}
              name="number"
              type="number"
              placeholder="Номер телефона (не обязательно)"
            />
          </div>
          <div className={style.inputWrapper}>
            {passwordDirty && passwordError && (
              <div className={style.errorMessage}>{passwordError}</div>
            )}
            <input
              onChange={(e) => passwordHandler(e)}
              onBlur={(e) => blurHandler(e)}
              name="password"
              style={passwordDirty && passwordError ? { border: '1px solid red' } : {}}
              type="password"
              placeholder="Пароль"
              maxLength={20}
            />
          </div>
          <div className={style.inputWrapper}>
            {password2Dirty && password2Error && (
              <div className={style.errorMessage}>{password2Error}</div>
            )}
            <input
              onChange={(e) => password2Handler(e)}
              onBlur={(e) => blurHandler(e)}
              name="password2"
              style={password2Dirty && password2Error ? { border: '1px solid red' } : {}}
              type="password"
              placeholder="Подтвердите пароль"
              maxLength={20}
            />
          </div>
        </div>
        <button
          disabled={!formValid}
          style={!formValid ? { opacity: '0.6' } : {}}
          className={style.sendButton}
          onClick={() => UserCreateFunc()}>
          <MainButton color="darkblue" text="Зарегистрироваться" />
        </button>
      </>
    );
  };

  //!-----------------------ФОРМА АВТОРИЗАЦИИ-----------------------*

  let UserAuthFunc = () => {
    dispatch(
      requestGetToken({
        email: emailData,
        password: passwordData,
      } as tokenParams),
    );
  };

  const [formValid2, setFormValid2] = React.useState(false);

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid2(false);
    } else {
      setFormValid2(true);
    }
  }, [emailError, passwordError]);

  const auth = () => {
    return (
      <>
        <h3>Вход</h3>
        <div className={style.authForms}>
          <div className={style.inputWrapper}>
            {emailDirty && emailError && <div className={style.errorMessage}>{emailError}</div>}
            <input
              onChange={(e) => emailHandler(e)}
              value={emailData}
              onBlur={(e) => blurHandler(e)}
              name="email"
              style={emailDirty && emailError ? { border: '1px solid red' } : {}}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className={style.inputWrapper}>
            {passwordDirty && passwordError && (
              <div className={style.errorMessage}>{passwordError}</div>
            )}
            <input
              onChange={(e) => passwordHandler(e)}
              onBlur={(e) => blurHandler(e)}
              name="password"
              style={passwordDirty && passwordError ? { border: '1px solid red' } : {}}
              type="password"
              placeholder="Пароль"
              maxLength={20}
            />
          </div>
        </div>
        <button
          disabled={!formValid2}
          style={!formValid2 ? { opacity: '0.6' } : {}}
          className={style.sendButton}
          onClick={() => UserAuthFunc()}>
          <MainButton color="darkblue" text="Войти" />
        </button>
      </>
    );
  };

  //!-----------------------Конструктор ФОРМ-----------------------*
  return (
    <div className={style.AuthFormBox}>
      <div className={props.type === 'auth' ? style.AuthForm2 : style.AuthForm}>
        {props.type === 'auth' ? <>{auth()}</> : <>{reg()}</>}
      </div>
      <img onClick={() => authClickClose()} className={style.closeBtn} src={closeBtn} alt="" />
    </div>
  );
};
