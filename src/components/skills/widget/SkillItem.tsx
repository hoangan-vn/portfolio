import { motion } from 'framer-motion';
import { FC } from 'react';

interface SkillItemProps {
  src: string;
  href: string;
  alt: string;
  width?: number;
  height?: number;
}

const SkillItem: FC<SkillItemProps> = ({ src, href = '#', alt = 'image', width = 40, height = 40 }): JSX.Element => {
  const random = 5 + Math.floor(Math.random() * 6);
  return (
    <motion.div
      initial={{ opacity: 1, y: -10 }}
      animate={{
        y: [-10, 10],
        transition: {
          duration: random,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }}
      className='rounded-2xl border-[1px] border-neutral-800 p-4 dark:border-gray-50'
    >
      <a href={href} target='_blank' rel='noreferrer'>
        <img src={src} alt={alt} width={width} height={height} />
      </a>
    </motion.div>
  );
};

export default SkillItem;
