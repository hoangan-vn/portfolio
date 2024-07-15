import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DownloadIcon, FileIcon } from '~/components/icons';
import { useDarkThemeDetector } from '~/hooks/useDarkThemeSelector';
import TooltipWidget from '~/widgets/TooltipWidget';

const ResumeWidget: FC = (): JSX.Element => {
  const pdfUrl = '/file/resume.pdf';
  const fileName = 'Nguyen-Hoang-An-resume.pdf';
  const { t } = useTranslation();

  const isDarkTheme = useDarkThemeDetector();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpen = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className='flex justify-start items-center gap-2'>
      <h2 className='flex items-center justify-center gap-1'>
        <FileIcon width={20} height={20} color={isDarkTheme ? '#fff' : '#24292F'} />
        <p className='text-center font-semibold dark:text-white'>{t('common-resume')}</p>
      </h2>
      <button className='p-2 rounded-md shadow dark:shadow-white dark:text-white' onClick={handleOpen}>
        {t('common-open')}
      </button>
      <TooltipWidget tooltip={t('common-download')}>
        <DownloadIcon
          className='p-2 rounded-md shadow cursor-pointer dark:shadow-white'
          width={40}
          height={40}
          color='#a5abb6'
          onClick={handleDownload}
        />
      </TooltipWidget>
    </div>
  );
};

export default ResumeWidget;
