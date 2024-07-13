import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import experienceDataEn from '~/assets/data/experience-en.json';
import experienceDataVi from '~/assets/data/experience-vi.json';
import { Locale } from '~/constants/enum';
import { RootState } from '~/app/store';

import { ExperienceItemWidget } from './widget';

const Experience: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const currentLocale = useSelector((state: RootState) => state.localization.locale);
  const data = currentLocale === Locale.en ? experienceDataEn : experienceDataVi;

  return (
    <section className='w-screen flex flex-col justify-start items-center p-16 gap-10'>
      <h1 id='experience' className='text-gradient inline-block font-bold text-5xl dark:text-gradient-100'>
        {t('nav-experience')}
      </h1>
      <div className='flex flex-col gap-3 items-start w-full'>
        {data.map((experience) => (
          <ExperienceItemWidget
            leading={experience.leading}
            title={experience.title}
            jobTitles={experience.jobTitles}
            at={experience.at}
            description={experience.description}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
