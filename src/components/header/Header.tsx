import clsx from 'clsx';
import { useState, useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '~/assets/images/ic_launcher.png';
import APP_PATH from '~/constants/appPath';

import { LocaleWidget, NavWidget, ThemeModeWidget } from './widget';

const Header: FC = (): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(APP_PATH.home);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'w-screen z-50 transition-colors duration-300 fixed px-12 py-3 flex justify-between items-center',
        scrolled && 'bg-opacity-50 backdrop-blur-md border-b-[0.5px] border-gray-300'
      )}
    >
      <button onClick={handleLogoClick}>
        <img src={logo} alt='Logo' className='w-14' />
      </button>
      <div className='flex justify-between items-center'>
        <NavWidget />
        <div className='flex justify-between items-center pl-3 border-l-2 border-gray-400 w-[6rem]'>
          <LocaleWidget className='w-8' />
          <ThemeModeWidget className='w-8 h-8' />
        </div>
      </div>
    </header>
  );
};

export default Header;
