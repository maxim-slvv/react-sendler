import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

import type { PayloadAction } from '@reduxjs/toolkit';

//TODO: выяснить тип
type FetchPizzasArgs = Record<string, string>;

// export const fetchPizzas = createAsyncThunk<UserCreateParams, FetchPizzasArgs>(
//   'pizzas/fetchPizzasStatus',

//   async (params) => {
//     const { email, password, confirm_password, username, phone, field_of_activity } = params;
//     const response = await axios.post<UserCreateParams>('http://localhost:8000/api/v1/user/reg/ ', {
//       email: 'andrey3kulagin@gmail.com',
//       password: 'qwer1234',
//       confirm_password: 'qwer1234',
//       username: 'andrey3kulagin',
//       phone: '89863272323',
//       field_of_activity: 'услуги логистики с Китаем',
//     });
//   },
// );

export type UserCreateParams = {
  email: string;
  password: string;
  confirm_password: string;
  username: string;
  phone: string;
  field_of_activity: string;
};

//? JSON----------------------------
//* {
//*    "email": "andrey3kulagin@gmail.com",
//*    "password": "qwer1234",
//*    "confirm_password": "qwer1234",
//*    "username": "andrey3kulagin",
//*    "phone": "89863272323",
//*    "field_of_activity": "услуги логистики с Китаем"
//*  }
//? Array----------------------------
//* {
//*     "email": "andrey3kulagin@gmail.com",
// *    "password": "qwer1234",
//*     "confirm_password": "qwer1234",
//  *   "username": "andrey3kulagin",
//*     "phone": "89863272323",
//*     "field_of_activity": "услуги логистики с Китаем"
//*   }

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
