import { useSelector } from 'react-redux';
import { RootState } from '~/app/store';
import { darkColorSchema, lightColorSchema } from '~/constants/constants';
import { ThemeMode } from '~/constants/enum';

export const isDarkTheme = (): boolean => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  return currentTheme === ThemeMode.dark || (currentTheme === ThemeMode.system && darkQuery.matches);
};

export const getColorSchema = (): ColorSchema => {
  if (isDarkTheme()) {
    return darkColorSchema;
  }
  return lightColorSchema;
};
