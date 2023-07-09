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
  field_of_activity?: string;
};

//TODO: проверить что может приходит с сервера
interface ServerData {
  email?: string;
  username?: string;
  phone?: string;
  field_of_activity?: string;
}

export const requestUserCreate = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (params: UserCreateParams) => {
    const { email, password, confirm_password, username, phone, field_of_activity } = params;
    const { data } = await axios.post('api/user/create', {
      email,
      password,
      confirm_password,
      username,
      phone,
      field_of_activity,
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
