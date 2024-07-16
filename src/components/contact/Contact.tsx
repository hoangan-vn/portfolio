import { motion } from 'framer-motion';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { GithubProfileWidget, ResumeWidget, EmailWidget, PhoneWidget, LinkedInWidget} from './widget';

const Contact: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section id='contact' className='w-screen flex justify-center items-center'>
      <div className='w-[80%] flex justify-center items-center px-10 py-12 gap-10 rounded-lg border-[0.5px] shadow-xl shrink-2 dark:shadow dark:shadow-white'>
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
          className='flex-1 text-gradient font-bold text-5xl text-center'
        >
          {t('nav-contact')}
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.5 }}
          className='flex-1 flex flex-col justify-center items-start gap-5'
        >
          <GithubProfileWidget />
          <ResumeWidget />
          <EmailWidget />
          <PhoneWidget />
          <LinkedInWidget />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
