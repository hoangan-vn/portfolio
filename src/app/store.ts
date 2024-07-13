import { configureStore } from '@reduxjs/toolkit';
import localizationReducer, { LocalizationState } from '~/features/locale/localeSlice';
import themeReducer, { ThemeState } from '~/features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    localization: localizationReducer,
    theme: themeReducer
  }
});

export type RootState = {
  localization: LocalizationState;
  theme: ThemeState;
};
export type AppDispatch = typeof store.dispatch;
