import clsx from 'clsx';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CopyIcon, MailIcon } from '~/components/icons';
import { useDarkThemeDetector } from '~/hooks/useDarkThemeSelector';
import { copy } from '~/utils/text.util';
import { TooltipWidget } from '~/widgets';

const EmailWidget: FC = (): JSX.Element => {
  const [email] = useState<string>('hoangan072024@gmail.com');
  const { t } = useTranslation();

  const isDarkTheme = useDarkThemeDetector();

  const handleCopy = () => {
    copy(email);
  };

  return (
    <div className='flex justify-start items-center gap-2'>
      <h2 className='flex items-center justify-center gap-1'>
        <MailIcon width={20} height={20} color={isDarkTheme ? '#fff' : '#24292F'} />
        <p className='text-center font-semibold dark:text-white'>
          {t('common-email')}
          {t('common-colon')}
          <span className='italic font-normal ml-4 px-2 py-1 rounded-lg bg-gray-300 text-black'>{email}</span>
        </p>
      </h2>
      <a className={clsx('p-2 rounded-md shadow dark:shadow-white dark:text-white')} href={`mailto:${email}`}>
        {t('common-send')}
      </a>
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

export default EmailWidget;
