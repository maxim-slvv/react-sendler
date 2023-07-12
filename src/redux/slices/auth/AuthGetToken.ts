import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type tokenParams = {
  username: string;
  password: string;
};

interface ServerData {
  access: string;
  refresh: string;
}

//TODO когда делать запрос проверки токенов? /token/verify - при/перед открытием сайта/кабинета?
//TODO как делать запрос обновления токенов? /token/refresh - на что опираться? скорее всего на проверку каждое открытие сайта и каждые 10 минут?

export const requestGetToken = createAsyncThunk('auth/getToken', async (params: tokenParams) => {
  const { username, password } = params;
  const { data } = await axios.post('http://localhost:8000/api/v1/token', {
    username,
    password,
  });
  return data as ServerData;
});

export enum Status {
  LOADING = 'loading',
  AUTHORIZED = 'autorized',
  UNAUTHORIZED = 'unautorized',
  ERROR = 'error',
}

export interface UserCreateType {
  access: string;
  refresh: string;
  status: Status;
}

const initialState: UserCreateType = {
  access: '',
  refresh: '',
  status: Status.UNAUTHORIZED,
};

export const UserCreate = createSlice({
  name: 'GetToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestGetToken.pending, (state) => {
        //TODO сделать очистку токенов?
        state.status = Status.LOADING;
        //TODO вот так можем очищать
        //TODO state.items = [];
        alert('Ошибка');
      })
      .addCase(requestGetToken.fulfilled, (state, action) => {
        //TODO проверить ответ с сервера и правильно записать его в state access/refresh
        //TODO state.items = action.payload;
        console.log(action.payload);
        state.status = Status.AUTHORIZED;
        alert('Успешная авторизация');
      })
      .addCase(requestGetToken.rejected, (state) => {
        state.status = Status.ERROR;
        alert('Неверные данные');
      });
  },
});

export const authState = (state: RootState) => state;

export const {} = UserCreate.actions;

export default UserCreate.reducer;
