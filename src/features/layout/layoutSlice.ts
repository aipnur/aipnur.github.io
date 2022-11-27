import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LayoutState {
  colorTheme: 'light' | 'dark';
}

const initialState: LayoutState = {
  colorTheme: localStorage.getItem('color-theme') === 'light' ? 'light' : 'dark',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleColorTheme: (state) => {
      const currentTheme = state.colorTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('color-theme', currentTheme);
      state.colorTheme = currentTheme;
    },
  },
});

export const { toggleColorTheme } = layoutSlice.actions;

export const selectColorTheme = (state: RootState) => state.layout.colorTheme;

export default layoutSlice.reducer;
