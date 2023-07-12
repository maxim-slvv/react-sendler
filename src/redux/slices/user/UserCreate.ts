import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

import type { PayloadAction } from '@reduxjs/toolkit';

export type UserCreateParams = {
  email: string;
  password: string;
  confirm_password: string;
  username: string;
  phone: string;
};

//TODO: проверить что может приходит с сервера
interface ServerData {
  email?: string;
  username?: string;
  phone?: string;
}

export const requestUserCreate = createAsyncThunk(
  'user/userCreate',
  async (params: UserCreateParams) => {
    const { email, password, confirm_password, username, phone } = params;
    const { data } = await axios.post('http://localhost:8000/api/v1/user/create', {
      email,
      password,
      confirm_password,
      username,
      phone,
    });
    return data as ServerData;
  },
);

export interface UserCreateType {
  isAuthOpen: boolean;
}

const initialState: UserCreateType = {
  isAuthOpen: false,
};

export const UserCreate = createSlice({
  name: 'UserCreate',
  initialState,
  reducers: {
    //для глобального открытия окна
    setAuthOpen: (state) => {
      state.isAuthOpen = true;
    },
    setAuthClose: (state) => {
      state.isAuthOpen = false;
    },
  },
});

export const authState = (state: RootState) => state;

export const { setAuthOpen, setAuthClose } = UserCreate.actions;

export default UserCreate.reducer;
