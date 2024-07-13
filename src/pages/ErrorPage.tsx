import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';

import notFoundAnimationData from '~/assets/lotties/page-not-found-animation.json';
import notFoundAnimationDarkData from '~/assets/lotties/page-not-found-animation-dark.json';
import APP_PATH from '~/constants/appPath';
import { useSelector } from 'react-redux';
import { RootState } from '~/app/store';
import { ThemeMode } from '~/constants/enum';

const ErrorPage: FC = (): JSX.Element => {
  const { t } = useTranslation();

  const isDarkTheme = (): boolean => {
    const currentTheme = useSelector((state: RootState) => state.theme.theme);
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return currentTheme === ThemeMode.dark || (currentTheme === ThemeMode.system && darkQuery.matches);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: isDarkTheme() ? notFoundAnimationDarkData : notFoundAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(APP_PATH.home);
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen dark:bg-[#282a36]'>
      <div className='text-center'>
        <Lottie options={defaultOptions} height={300} width={300} />
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
          {t('error-page-not-found')}
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600 dark:text-gray-300'>{t('error-sorry')}</p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            onClick={handleClick}
            className='rounded-md bg-teal-900 hover:bg-teal-700 active:bg-teal-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
          >
            {t('error-back-home')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
