import { darkColorSchema, lightColorSchema } from '~/constants/constants';
import { useDarkThemeDetector } from '~/hooks/useDarkThemeSelector';

export const getColorSchema = (): ColorSchema => {
  const isDarkTheme = useDarkThemeDetector();
  if (isDarkTheme) {
    return darkColorSchema;
  }
  return lightColorSchema;
};
