import { FC, MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Direction } from '~/constants/enum';
import { DividerWidget, CardTechnologyWidget } from '~/widgets';

interface ExperienceItemWidgetProps extends Experience {
  onClick?: MouseEventHandler;
}

const ExperienceItemWidget: FC<ExperienceItemWidgetProps> = ({
  leading,
  onClick,
  title,
  jobTitles,
  at,
  description,
  technologies
}) => {
  const { t } = useTranslation();

  return (
    <div className='flex w-full h-full justify-center items-center py-3'>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: -100 }}
        transition={{ duration: 0.5 }}
        className='w-[30%] flex justify-center items-center relative'
      >
        <span className='text-gray-500 text-xl dark:text-white'>{leading}</span>
      </motion.div>

      <DividerWidget direction={Direction.vertical} />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: 100 }}
        transition={{ duration: 0.5 }}
        className='w-[70%] pl-16 flex flex-col gap-5'
        onClick={onClick}
      >
        <h2 className='text-2xl font-bold dark:text-white'>{title}</h2>
        <h3 className='text-xl dark:text-white'>
          {t('experience-job-titles')}
          {jobTitles}
          <span className='mx-2'>{t('common-hyphen')}</span>
          {t('experience-at')}
          {at}
        </h3>
        <p className='font-light text-gray-400 text-justify text-sm italic dark:text-gray-200'>{description}</p>
        <div className='flex flex-wrap items-center gap-4'>
          {technologies?.map((item, index) => <CardTechnologyWidget key={index} title={item} />)}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceItemWidget;
