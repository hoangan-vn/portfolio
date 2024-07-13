import { FC } from 'react';

const CopyIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#000', className, onClick }): JSX.Element => {
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
        d='M10.5 2.003c-.675.009-1.08.048-1.408.215a2 2 0 00-.874.874c-.167.328-.206.733-.215 1.408M19.5 2.003c.675.009 1.08.048 1.408.215a2 2 0 01.874.874c.167.328.206.733.215 1.408m0 9c-.009.675-.048 1.08-.215 1.408a2 2 0 01-.874.874c-.328.167-.733.206-1.408.215M22 8v2m-8-8h2M5.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C16 20.48 16 19.92 16 18.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C14.48 8 13.92 8 12.8 8H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C2 9.52 2 10.08 2 11.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 22 4.08 22 5.2 22z'
      ></path>
    </svg>
  );
};

export default CopyIcon;
