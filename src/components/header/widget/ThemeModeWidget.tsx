import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { DarkIcon, LightIcon, SystemIcon } from '~/components/icons';
import { ThemeMode } from '~/constants/enum';
import { setTheme } from '~/features/theme/themeSlice';
import { useDarkThemeDetector } from '~/hooks/useDarkThemeSelector';
import TooltipWidget from '~/widgets/TooltipWidget';

interface ThemeModeWidgetProps {
  className?: string;
}

// TODO: CHECKING SYSTEM THEME MODE

const ThemeModeWidget: FC<ThemeModeWidgetProps> = ({ className }): JSX.Element => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const [theme, setThemeState] = useState<ThemeMode>(currentTheme);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkTheme = useDarkThemeDetector();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChangeMode = (mode: ThemeMode) => {
    setThemeState(mode);
    dispatch(setTheme(mode));
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
    const handleDarkQueryChange = (e: MediaQueryListEvent) => {
      if (theme === ThemeMode.system) {
        if (e.matches) {
          element.classList.add('dark');
        } else {
          element.classList.remove('dark');
        }
      }
    };

    darkQuery.addEventListener('change', handleDarkQueryChange);

    return () => {
      darkQuery.removeEventListener('change', handleDarkQueryChange);
    };
  }, [darkQuery]);

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

  useEffect(() => {
    if (isDarkTheme) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      <button
        onClick={handleShow}
        className={clsx(
          'relative rounded-full shadow flex justify-center items-center',
          'hover:animate-jump hover:animate-once hover:animate-delay-0 hover:bg-white',
          className
        )}
        ref={buttonRef}
      >
        <TooltipWidget tooltip={t('theme-theme')}>
          {theme === ThemeMode.dark ? (
            <DarkIcon color='#60a5fa' />
          ) : theme === ThemeMode.light ? (
            <LightIcon color='#60a5fa' />
          ) : (
            <SystemIcon color='#60a5fa' />
          )}
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
                theme === ThemeMode.light ? 'text-blue-400 bg-slate-100' : 'hover:bg-slate-200'
              )}
              onClick={() => handleChangeMode(ThemeMode.light)}
            >
              <LightIcon color={theme === ThemeMode.light ? '#60a5fa' : undefined} className='mr-6' />
              <span className='text-start'>{t('theme-light')}</span>
            </button>

            <button
              className={clsx(
                'flex justify-start items-center font-medium px-4 py-3 w-full',
                theme === ThemeMode.dark ? 'text-blue-400 bg-slate-100' : 'hover:bg-slate-200'
              )}
              onClick={() => handleChangeMode(ThemeMode.dark)}
            >
              <DarkIcon color={theme === ThemeMode.dark ? '#60a5fa' : undefined} className='mr-6' />
              <span className='text-start'>{t('theme-dark')}</span>
            </button>

            <button
              className={clsx(
                'flex justify-start items-center font-medium px-4 py-3 rounded-b-2xl w-full',
                theme === ThemeMode.system ? 'text-blue-400 bg-slate-100' : 'hover:bg-slate-200'
              )}
              onClick={() => handleChangeMode(ThemeMode.system)}
            >
              <SystemIcon color={theme === ThemeMode.system ? '#60a5fa' : undefined} className='mr-6' />
              <span className='text-start'>{t('theme-system')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeModeWidget;
