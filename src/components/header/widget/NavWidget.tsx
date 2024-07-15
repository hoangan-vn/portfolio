import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const NavWidget: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId?: string) => {
    event.preventDefault();

    if (!targetId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = offsetTop - window.innerHeight / 2 + targetElement.offsetHeight / 2;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='flex justify-around items-center mr-4'>
      <a className='px-3 cursor-pointer dark:text-white hover:underline' onClick={(e) => handleNavigation(e)}>
        {t('nav-home')}
      </a>
      <a className='px-3 cursor-pointer dark:text-white hover:underline' onClick={(e) => handleNavigation(e, 'about')}>
        {t('nav-about')}
      </a>
      <a className='px-3 cursor-pointer dark:text-white hover:underline' onClick={(e) => handleNavigation(e, 'skills')}>
        {t('nav-skills')}
      </a>
      <a className='px-3 cursor-pointer dark:text-white hover:underline' onClick={(e) => handleNavigation(e, 'experience')}>
        {t('nav-experience')}
      </a>
      <a className='px-3 cursor-pointer dark:text-white hover:underline' onClick={(e) => handleNavigation(e, 'projects')}>
        {t('nav-projects')}
      </a>
      <a className='px-3 cursor-pointer dark:text-white hover:underline' onClick={(e) => handleNavigation(e, 'contact')}>
        {t('nav-contact')}
      </a>
    </div>
  );
};

export default NavWidget;
