// import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';

// import style from './AuthForm.module.scss';

// interface FormValues {
//   email: string;
//   username: string;
//   phoneNumber: number;
//   password: string;
//   confirmPassword: string;
// }

// const FormComponent: React.FC = () => {
//   const { register, handleSubmit } = useForm<FormValues>();

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     console.log(data); // Объект с введенными данными формы
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className={style.authForms}>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           ref={register as React.Ref<HTMLInputElement>}
//         />
//         <input
//           type="text"
//           placeholder="Имя пользователя"
//           name="username"
//           ref={register as React.Ref<HTMLInputElement>}
//         />
//         <input
//           type="number"
//           placeholder="Номер телефона"
//           name="phoneNumber"
//           ref={register as React.Ref<HTMLInputElement>}
//         />
//         <input
//           type="password"
//           placeholder="Пароль"
//           name="password"
//           ref={register as React.Ref<HTMLInputElement>}
//         />
//         <input
//           type="password"
//           placeholder="Подтвердите пароль"
//           name="confirmPassword"
//           ref={register as React.Ref<HTMLInputElement>}
//         />
//       </div>
//       <button type="submit">Отправить</button>
//     </form>
//   );
// };

// export default FormComponent;
