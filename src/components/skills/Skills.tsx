import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import skillsData from '~/assets/data/skills.json';

import { SkillItem } from './widget';

const Skills: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section id='skills' className='w-screen flex flex-col justify-start items-center p-16 gap-10'>
      <h1 className='text-center text-gradient inline-block font-bold text-5xl'>{t('nav-skills')}</h1>
      <p className='text-justify leading-7 dark:text-white'>{t('skill-intro')}</p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap justify-center items-center gap-4'
      >
        {skillsData.map((skill, index) => (
          <SkillItem key={index} src={skill.src} alt={skill.alt} href={skill.href} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
