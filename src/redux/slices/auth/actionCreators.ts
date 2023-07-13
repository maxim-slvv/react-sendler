import { Dispatch } from '@reduxjs/toolkit';
import api from '../../../api/index';
import { tokenParams, ServerData } from '../../../api/auth/types';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  // logoutSuccess,loadProfileStart, loadProfileFailure, loadProfileSucess
} from './AuthGetToken';
// import { history } from '../../utils/history'
// import { store } from ".."
// import { AxiosPromise } from "axios"
// import { isTokenExpired } from "../../utils/jwt"

//!здесь данные для авторизации начинаю обрабатывать
export const loginUser =
  (data: tokenParams) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart());

      const res = await api.auth.AuthLogin(data);

      dispatch(loginSuccess(res.data));
      // dispatch(getProfile())
    } catch (e: any) {
      console.error(e);

      dispatch(loginFailure(e.message));
    }
  };
