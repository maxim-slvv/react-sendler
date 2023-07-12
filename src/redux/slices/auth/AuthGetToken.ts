import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  authData: {
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;
  };
  profileData: {
    profile: string | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: AuthState = {
  authData: {
    accessToken: null,
    isLoading: false,
    error: null,
  },
  profileData: {
    profile: null,
    isLoading: false,
    error: null,
  },
};

export const AuthGetToken = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: true,
      },
    }),
    loginSucess: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        accessToken: action.payload,
        isLoading: false,
        error: null,
      },
    }),
    loginFailure: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: false,
        error: action.payload,
      },
    }),
    // loadProfileStart: (state): AuthState => ({
    //   ...state,
    //   profileData: {
    //     ...state.profileData,
    //     isLoading: true,
    //   },
    // }),
    // loadProfileSucess: (state, action: PayloadAction<string>): AuthState => ({
    //   ...state,
    //   profileData: {
    //     ...state.profileData,
    //     profile: action.payload,
    //     isLoading: false,
    //     error: null,
    //   },
    // }),
    // loadProfileFailure: (state, action: PayloadAction<string>): AuthState => ({
    //   ...state,
    //   profileData: {
    //     ...state.profileData,
    //     isLoading: false,
    //     error: action.payload,
    //   },
    // }),
    // logoutSuccess: (): AuthState => initialState,
  },
});

export const {
  // loadProfileStart,
  // loadProfileSucess,
  // loadProfileFailure,
  loginStart,
  loginSucess,
  loginFailure,
  // logoutSuccess,
} = AuthGetToken.actions;

export default AuthGetToken.reducer;

//!-------------------СТАРЫЙ ВИД КОДА
// import axios from 'axios';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../../store';
// import { ServerData, tokenParams } from './types';

// export const requestGetToken = createAsyncThunk('auth/getToken', async (params: tokenParams) => {
//   const { username, password } = params;
//   const { data } = await axios.post('http://localhost:8000/api/v1/token', {
//     username,
//     password,
//   });
//   return data as ServerData;
// });
// export enum Status {
//   LOADING = 'loading',
//   AUTHORIZED = 'autorized',
//   UNAUTHORIZED = 'unautorized',
//   ERROR = 'error',
// }

// export interface UserCreateType {
//   access: string;
//   refresh: string;
//   status: Status;
// }

// const initialState: UserCreateType = {
//   access: '',
//   refresh: '',
//   status: Status.UNAUTHORIZED,
// };

// export const UserCreate = createSlice({
//   name: 'GetToken',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(requestGetToken.pending, (state) => {
//         //TODO сделать очистку токенов?
//         state.status = Status.LOADING;
//         //TODO вот так можем очищать
//         //TODO state.items = [];
//         alert('Ошибка');
//       })
//       .addCase(requestGetToken.fulfilled, (state, action) => {
//         //TODO проверить ответ с сервера и правильно записать его в state access/refresh
//         //TODO state.items = action.payload;
//         console.log(action.payload);
//         state.status = Status.AUTHORIZED;
//         alert('Успешная авторизация');
//       })
//       .addCase(requestGetToken.rejected, (state) => {
//         state.status = Status.ERROR;
//         alert('Неверные данные');
//       });
//   },
// });

// export const authState = (state: RootState) => state;

// export const {} = UserCreate.actions;

// export default UserCreate.reducer;
