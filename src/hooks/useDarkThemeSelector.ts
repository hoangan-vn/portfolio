import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { ThemeMode } from '~/constants/enum';

export const useDarkThemeDetector = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const isDarkSystemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  switch (currentTheme) {
    case ThemeMode.dark:
      return true;
    case ThemeMode.light:
      return false;
    default:
      return isDarkSystemTheme;
  }
};
