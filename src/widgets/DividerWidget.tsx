import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { Direction } from '~/constants/enum';

// TODO: COMPLETE IT

interface DividerWidgetProps {
  direction: Direction;
  element?: ReactNode | string;
  className?: string;
  color?: string;
  size?: number;
}

const DividerWidget: FC<DividerWidgetProps> = ({
  direction = Direction.vertical,
  element,
  className,
  color,
  size = 30
}) => {
  const _color = color ? `bg-[${color}]` : 'bg-gray-400';
  const _size = size ? `[${size}px]` : 'full';
  if (direction === Direction.horizontal) {
    return (
      <div className={clsx('box-border flex items-center justify-center h-[1px]', `w-${_size}`, className)}>
        {element && (
          <>
            <div className={clsx('h-[1px]', `w-${_size}`, _color)}></div>
            <div className='px-2 text-center'>{element}</div>
            <div className={clsx('h-[1px]', `w-${_size}`, _color)}></div>
          </>
        )}
      </div>
    );
  }
  return (
    <div className={clsx('box-border flex flex-col items-center justify-center w-[1px]', `h-${_size}`, className)}>
      {element && (
        <>
          <div className={clsx('w-[1px]', `h-${_size}`, _color)}></div>
          <div className='py-2 text-center'>{element}</div>
          <div className={clsx('w-[1px]', `h-${_size}`, _color)}></div>
        </>
      )}
    </div>
  );
};

export default DividerWidget;
