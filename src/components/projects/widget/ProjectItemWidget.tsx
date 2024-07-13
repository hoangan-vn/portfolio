import { FC, MouseEventHandler, Suspense } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

import { Direction } from '~/constants/enum';
import { DividerWidget, CardTechnologyWidget } from '~/widgets';
import LoadingAnimationData from '~/assets/lotties/loading-image-animation.json';

interface ProjectItemWidgetProps extends Project {
  onClick?: MouseEventHandler;
}

const ProjectItemWidget: FC<ProjectItemWidgetProps> = ({
  leading,
  onClick,
  title,
  time,
  link,
  description,
  technologies
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className='flex w-full h-full justify-center items-center py-3'>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: -100 }}
        transition={{ duration: 0.5 }}
        className='w-[30%] flex justify-center items-center relative'
      >
        <Suspense
          fallback={
            <div className='absolute bg-opacity-80 z-10 flex justify-center items-center w-full h-full'>
              <Lottie options={defaultOptions} height={100} width={100} />
            </div>
          }
        >
          <img src={leading} className='w-[150px] h-auto shadow cursor-pointer dark:shadow-white' onClick={handleClick} />
        </Suspense>
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
        <h3 className='text-xl dark:text-white'>{time}</h3>
        <p className='font-light text-sm dark:text-white'>{link}</p>
        <p className='font-light text-gray-400 text-justify text-sm italic dark:text-gray-200'>{description}</p>
        <div className='flex flex-wrap items-center gap-4'>
          {technologies?.map((item, index) => <CardTechnologyWidget key={index} title={item} />)}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectItemWidget;
