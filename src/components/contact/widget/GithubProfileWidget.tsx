import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { CopyIcon, GithubIcon } from '~/components/icons';
import { ThemeMode } from '~/constants/enum';
import { copy } from '~/utils/text.util';
import { TooltipWidget } from '~/widgets';

const GithubProfileWidget: FC = (): JSX.Element => {
  const [github] = useState<string>('https://github.com/hoangan-vn');
  const { t } = useTranslation();

  const handleOpen = () => {
    window.open(github, '_blank');
  };

  const isDarkTheme = (): boolean => {
    const currentTheme = useSelector((state: RootState) => state.theme.theme);
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return currentTheme === ThemeMode.dark || (currentTheme === ThemeMode.system && darkQuery.matches);
  };

  const handleCopy = () => {
    copy(github);
  };

  return (
    <div className='flex justify-start items-center gap-2'>
      <h2 className='flex items-center justify-center gap-1'>
        <GithubIcon width={20} height={20} color={isDarkTheme() ? '#fff' : '#24292F'} />
        <p className='text-center font-semibold dark:text-white'>
          {t('common-github')}
          {t('common-colon')}
          <span className='italic font-normal ml-4 px-2 py-1 rounded-lg bg-gray-300 text-black'>{github}</span>
        </p>
      </h2>
      <button className='p-2 rounded-md shadow dark:shadow-white dark:text-white' onClick={handleOpen}>
        {t('common-open')}
      </button>
      <TooltipWidget tooltip={t('common-copy')}>
        <CopyIcon
          className='p-2 rounded-md shadow cursor-pointer dark:shadow-white'
          width={40}
          height={40}
          color='#a5abb6'
          onClick={handleCopy}
        />
      </TooltipWidget>
    </div>
  );
};

export default GithubProfileWidget;
