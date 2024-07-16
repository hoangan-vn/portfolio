import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CopyIcon, LinkedInIcon } from '~/components/icons';
import { useDarkThemeDetector } from '~/hooks/useDarkThemeSelector';
import { copy } from '~/utils/text.util';
import { TooltipWidget } from '~/widgets';

const LinkedInWidget: FC = (): JSX.Element => {
  const [linkedIn] = useState<string>('in/hoangan-vn');
  const { t } = useTranslation();

  const isDarkTheme = useDarkThemeDetector();

  const handleOpen = () => {
    window.open('https://www.linkedin.com/' + linkedIn, '_blank');
  };

  const handleCopy = () => {
    copy('https://www.linkedin.com/' + linkedIn);
  };
  return (
    <div className='flex justify-start items-center gap-2'>
      <h2 className='flex items-center justify-center gap-1'>
        <LinkedInIcon width={20} height={20} color={isDarkTheme ? '#fff' : '#24292F'} />
        <p className='text-center font-semibold dark:text-white'>
          {t('common-linkedin')}
          {t('common-colon')}
          <span className='italic font-normal ml-4 px-2 py-1 rounded-lg bg-gray-300 text-black'>{linkedIn}</span>
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

export default LinkedInWidget;
