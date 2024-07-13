import { FC } from 'react';

const DarkIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#000', className, onClick }): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 24 24'
      className={className}
      onClick={onClick}
    >
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M18.9 11.7v-3m0 0v-3m0 3h3m-3 0h-3m-1.8-3V3.9m0 0V2.1m0 1.8h1.8m-1.8 0h-1.8m9 11.04c-.902.273-1.86.42-2.851.42-5.418 0-9.81-4.392-9.81-9.81 0-.99.147-1.948.42-2.85C5.032 3.922 2.1 7.663 2.1 12.09c0 5.418 4.392 9.81 9.81 9.81 4.427 0 8.169-2.932 9.39-6.96z'
      ></path>
    </svg>
  );
};

export default DarkIcon;
