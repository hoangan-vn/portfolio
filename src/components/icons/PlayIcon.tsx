import { FC } from 'react';

const PlayIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#000', className, onClick }): JSX.Element => {
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
        d='M5 4.99c0-.972 0-1.457.202-1.725a1 1 0 01.738-.395c.335-.02.74.25 1.548.788l10.515 7.01c.668.446 1.002.668 1.118.949a1 1 0 010 .766c-.116.28-.45.503-1.118.948l-10.515 7.01c-.809.54-1.213.809-1.548.789a1 1 0 01-.738-.395C5 20.467 5 19.98 5 19.01V4.99z'
      ></path>
    </svg>
  );
};

export default PlayIcon;
