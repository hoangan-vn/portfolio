import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import projectsDataEn from '~/assets/data/projects-en.json';
import projectsDataVi from '~/assets/data/projects-vi.json';
import { Locale } from '~/constants/enum';
import { RootState } from '~/app/store';
import future from '~/assets/images/future.png';
import flutter from '~/assets/images/flutter-intern.png';
import greeny from '~/assets/images/greeny.png';

import { ProjectItemWidget } from './widget';

const Projects: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const currentLocale = useSelector((state: RootState) => state.localization.locale);
  const data = currentLocale === Locale.en ? projectsDataEn : projectsDataVi;
  const leadingCase = (leading: string) => {
    switch (leading) {
      case 'future':
        return future;
      case 'greeny':
        return greeny;
      default:
        return flutter;
    }
  };

  return (
    <section className='w-screen flex flex-col justify-start items-center p-16 gap-10'>
      <h1 id='projects' className='text-gradient inline-block font-bold text-5xl'>
        {t('nav-projects')}
      </h1>
      <div className='flex flex-col gap-3 items-start w-full'>
        {data.map((project) => (
          <ProjectItemWidget
            leading={leadingCase(project.leading)}
            title={project.title}
            time={project.time}
            link={project.link}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
