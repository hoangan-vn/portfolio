import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import intro from '~/assets/svg/intro.svg';

import { BannerWidget, TextAnimationWidget } from './widget';

const Intro: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <section id='intro' className='w-screen h-[105vh] flex items-center justify-between px-16 relative pt-16'>
        <div className='flex flex-col justify-center items-start gap-7'>
          <span className='font-bold tracking-wide px-6 py-3 bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] border border-[rgba(255,255,255,0.5)] text-[20px] mb-4 inline-block dark:text-white'>
            {t('intro-welcome')}
          </span>
          <TextAnimationWidget text={t('intro')} className='h-3 flex items-center text-4xl max-w-[600px] break-words' />
          <span className='animate-pulse dark:text-white'>{t('intro-position')}</span>
        </div>
        <div className='animate-jump-in animate-once flex justify-center items-center'>
          <img src={intro} alt='Intro' className='w-[500px] animate-move-up-down' />
        </div>
      </section>
      <BannerWidget />
    </>
  );
};

export default Intro;
