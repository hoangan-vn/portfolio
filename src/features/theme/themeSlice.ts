import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode } from '~/constants/enum';
import { loadState, saveState } from '~/utils/storage.util';

export interface ThemeState {
  theme: ThemeMode;
}

const initialState: ThemeState = {
  theme: loadState<ThemeMode>('theme') || ThemeMode.system
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.theme = action.payload;
      saveState('theme', action.payload);
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
