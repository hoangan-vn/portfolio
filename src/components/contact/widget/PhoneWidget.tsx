import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CopyIcon, PhoneIcon } from '~/components/icons';
import { useDarkThemeDetector } from '~/hooks/useDarkThemeSelector';
import { copy, formatVietnamPhoneNumber } from '~/utils/text.util';
import { TooltipWidget } from '~/widgets';

const PhoneWidget: FC = (): JSX.Element => {
  const [phone] = useState<string>('0779672566');
  const { t } = useTranslation();

  const isDarkTheme = useDarkThemeDetector();

  const handleCopy = () => {
    copy(phone);
  };
  return (
    <div className='flex justify-start items-center gap-2'>
      <h2 className='flex items-center justify-center gap-1'>
        <PhoneIcon width={20} height={20} color={isDarkTheme ? '#fff' : '#24292F'} />
        <p className='text-center font-semibold dark:text-white'>
          {t('common-phone')}
          {t('common-colon')}
          <span className='italic font-normal ml-4 px-2 py-1 rounded-lg bg-gray-300 text-black'>
            {formatVietnamPhoneNumber(phone)}
          </span>
        </p>
      </h2>
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

export default PhoneWidget;
