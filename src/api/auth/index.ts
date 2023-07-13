import { AxiosPromise } from 'axios';
import Endpoints from '../endpoints';
import { axiosInstance } from '../instance';
import { tokenParams, ServerData } from './types';

export const AuthLogin = (params: tokenParams): AxiosPromise<ServerData> =>
  axiosInstance.post(`http://localhost:8000` + Endpoints.AUTH.LOGIN, params);
