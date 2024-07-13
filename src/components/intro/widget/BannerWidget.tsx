import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PauseIcon, PlayIcon } from '~/components/icons';
import toast from '~/core/toastify';
import TooltipWidget from '~/widgets/TooltipWidget';

const audioFiles = ['/audio/afro-beat-instrumental.mp3', '/audio/flying-high.mp3'];

const BannerWidget: FC = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioFiles[Math.floor(Math.random() * 2)]));
  const [userInteracted, setUserInteracted] = useState(false);
  const { t } = useTranslation();

  const handlePlay = () => {
    if (!isPlaying) {
      audio
        .play()
        .then(() => {
          toast(t('banner-toast'), {
            duration: 4000,
            position: 'top-center',
            style: {},
            className: '',
            icon: '👏',
            iconTheme: {
              primary: '#000',
              secondary: '#fff'
            },
            ariaProps: {
              role: 'status',
              'aria-live': 'polite'
            }
          });
          setIsPlaying(true);
        })
        .catch(() => {
          toast(t('banner-error-toast'), {
            duration: 4000,
            position: 'top-center',
            style: {},
            className: '',
            icon: '⚠️',
            iconTheme: {
              primary: '#000',
              secondary: '#fff'
            },
            ariaProps: {
              role: 'status',
              'aria-live': 'polite'
            }
          });
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    audio.loop = true;
  }, [audio]);

  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    if (!userInteracted) {
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('keydown', handleUserInteraction);
    }

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [userInteracted]);

  return (
    <div
      className={clsx(
        'flex items-center justify-center absolute top-[80px] w-screen h-[50px] bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)]',
        isPlaying && 'animate-pulse animate-infinite animate-ease-linear animate-reverse animate-fill-forwards',
        'dark:border-t-[0.5px] dark:border-b-[0.5px] dark:border-white dark:from-[rgba(238,84,177,0.5)] dark:to-[rgba(125,98,248,0.5)]'
      )}
    >
      <h2 className='mr-6 dark:text-white'>{t('banner-title')}</h2>
      <button onClick={handlePlay} className='px-2 py-1 bg-orange-300 rounded-xl flex justify-center items-center'>
        <TooltipWidget tooltip={isPlaying ? t('banner-pause') : t('banner-play')}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </TooltipWidget>
      </button>
    </div>
  );
};

export default BannerWidget;
