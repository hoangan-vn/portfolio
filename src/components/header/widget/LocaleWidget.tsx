import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '~/app/store';
import { Locale } from '~/constants/enum';
import { setLocale } from '~/features/locale/localeSlice';
import viFlag from '~/assets/svg/vi.svg';
import enFlag from '~/assets/svg/en.svg';
import TooltipWidget from '~/widgets/TooltipWidget';

interface LocaleWidgetProps {
  className?: string;
}

const LocaleWidget: FC<LocaleWidgetProps> = ({ className }): JSX.Element => {
  const currentLocale = useSelector((state: RootState) => state.localization.locale);
  const [locale, setLocaleState] = useState<Locale>(currentLocale);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChangeMode = (locale: Locale) => {
    setLocaleState(locale);
    dispatch(setLocale(locale));
    setShowPopover(false);
  };

  const handleShow = () => {
    setShowPopover(!showPopover);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    if (showPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopover]);

  return (
    <div>
      <button
        onClick={handleShow}
        className={clsx(
          'relative rounded-full flex justify-center items-center',

          className
        )}
        ref={buttonRef}
      >
        <TooltipWidget tooltip={t('locale-language')}>
          {locale === Locale.vi ? <img src={viFlag} alt='Vi' /> : <img src={enFlag} alt='En' />}
        </TooltipWidget>
      </button>
      {showPopover && (
        <div
          className={clsx('absolute top-[110%] right-6 rounded-2xl shadow-xl z-10 bg-white', 'dark:shadow-none')}
          ref={popoverRef}
        >
          <div className='flex flex-col justify-between items-start'>
            <button
              className={clsx(
                'flex justify-start items-center font-medium px-4 py-3 rounded-t-2xl w-full',
                locale === Locale.vi ? 'text-blue-400 bg-slate-100' : 'hover:bg-slate-300'
              )}
              onClick={() => handleChangeMode(Locale.vi)}
            >
              <img src={viFlag} alt='Vi' className={clsx('w-6 mr-6')} />
              <span className='text-start'>{t('locale-vi')}</span>
            </button>
            <button
              className={clsx(
                'flex justify-start items-center font-medium px-4 py-3 rounded-b-2xl w-full',
                locale === Locale.en ? 'text-blue-400 bg-slate-100' : 'hover:bg-slate-300'
              )}
              onClick={() => handleChangeMode(Locale.en)}
            >
              <img src={enFlag} alt='En' className={clsx('w-6 mr-6')} />
              <span className='text-start'>{t('locale-en')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocaleWidget;
