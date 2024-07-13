import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Locale } from '~/constants/enum';
import i18n from '~/localization/i18n';
import { loadState, saveState } from '~/utils/storage.util';

export interface LocalizationState {
  locale: Locale;
}

const initialState: LocalizationState = {
  locale: loadState<Locale>('language') || Locale.en
};

const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload;
      i18n.changeLanguage(action.payload);
      saveState('language', action.payload);
    }
  }
});

export const { setLocale } = localizationSlice.actions;
export default localizationSlice.reducer;
