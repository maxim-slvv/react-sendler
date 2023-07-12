import { configureStore } from '@reduxjs/toolkit';
import HomeAuthClick from './slices/HomeAuthClick';
import AuthGetToken from './slices/auth/AuthGetToken';
import { useDispatch } from 'react-redux';

import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    homeAuthClick: HomeAuthClick,
    auth: AuthGetToken,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : [])),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
