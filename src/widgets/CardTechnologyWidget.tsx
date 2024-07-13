import clsx from 'clsx';
import { FC, ReactElement } from 'react';

interface CardTechnologyWidgetProps {
  icon?: ReactElement;
  title: string;
}

const CardTechnologyWidget: FC<CardTechnologyWidgetProps> = ({ icon, title }): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-2 shadow border border-purple-400 rounded-md px-4 py-2 opacity-70 text-purple-600',
        'dark:shadow-white dark:text-purple-300'
      )}
    >
      {icon}
      <h4>{title}</h4>
    </div>
  );
};

export default CardTechnologyWidget;
