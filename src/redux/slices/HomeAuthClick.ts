import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface HomeAuthClickType {
  isAuthOpen: boolean;
}

const initialState: HomeAuthClickType = {
  isAuthOpen: false,
};

export const HomeAuthClick = createSlice({
  name: 'HomeAuthClick',
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

export const authState = (state: RootState) => state.homeAuthClick.isAuthOpen;

export const { setAuthOpen, setAuthClose } = HomeAuthClick.actions;

export default HomeAuthClick.reducer;
