import { FC } from 'react';

const LinkedInIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#000', className, onClick }): JSX.Element => {
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
        d='M15.996 16H16V10.13c0-2.87-.618-5.082-3.974-5.082-1.613 0-2.696.886-3.138 1.725h-.047V5.317H5.66V16h3.314V10.71c0-1.393.264-2.74 1.988-2.74 1.7 0 1.725 1.59 1.725 2.83V16h3.31zM.264 5.318h3.317V16H.264V5.318zM1.921 0C.861 0 0 .86 0 1.921s.86 1.94 1.921 1.94 1.922-.879 1.922-1.94C3.842.861 2.98 0 1.92 0z'
      ></path>
    </svg>
  );
};

export default LinkedInIcon;
