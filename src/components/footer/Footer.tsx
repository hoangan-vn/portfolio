import { FC, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';

import LoadingAnimationData from '~/assets/lotties/loading-animation.json';
import placeholder from '~/assets/images/placeholder.png';
import APP_PATH from '~/constants/appPath';
import logo from '~/assets/images/ic_launcher.png';

const MapComponent = lazy(() => import('./widget/MapWidget'));

const Footer: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <footer className='w-screen flex flex-col min-w-[800px] px-16 mt-5'>
      <div className='flex justify-between items-start py-10 gap-24'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <button className='cursor-pointer w-[170px]' onClick={() => navigate(APP_PATH.home)}>
            <img src={logo} alt='Logo' />
          </button>
          <span className='text-justify dark:text-white'>{t('footer-info')}</span>
        </div>

        <div className='flex flex-col gap-5'>
          <h5 className='text-xl leading-[35px] font-semibold dark:text-white'>
            {`${t('footer-terms-condition')} & ${t('footer-privacy-policy')}`}
          </h5>
          <ul className='space-y-5 text-heading-9 whitespace-nowrap dark:text-white'>
            <li className='cursor-pointer hover:underline' onClick={() => navigate(APP_PATH['terms-condition'])}>
              {t('footer-terms-condition')}
            </li>
            <li className='cursor-pointer hover:underline' onClick={() => navigate(APP_PATH['privacy-policy'])}>
              {t('footer-privacy-policy')}
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-0 shrink-0'>
          <h5 className='text-xl leading-[35px] font-semibold dark:text-white'>{t('footer-follow')}</h5>
          <div className='relative w-[400px] h-[300px]'>
            <Suspense
              fallback={
                <div className='absolute bg-opacity-80 z-10 flex justify-center items-center w-full h-full'>
                  <Lottie options={defaultOptions} height={100} width={100} />
                </div>
              }
            >
              <MapComponent placeholder={placeholder} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center p-10 border-t-2 border-gray-400 dark:text-white'>
        {t('footer-copyright')}
      </div>
    </footer>
  );
};

export default Footer;
