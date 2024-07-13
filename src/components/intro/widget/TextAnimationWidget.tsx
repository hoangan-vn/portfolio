import clsx from 'clsx';
import { useState, useEffect, FC } from 'react';

interface TextAnimationWidgetProps {
  text: string;
  className?: string;
}

const TextAnimationWidget: FC<TextAnimationWidgetProps> = ({ text, className }): JSX.Element => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTextAnimation = () => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setIndex(0);
      }
    };

    const timeoutId = setTimeout(handleTextAnimation, 100);
    return () => clearTimeout(timeoutId);
  }, [index, isDeleting, text]);

  return (
    <p className={clsx('whitespace-pre-line dark:text-white', className)}>
      {displayedText.split('').map((char, idx) => (
        <span
          key={idx}
          className={clsx('inline-block transition-opacity duration-500', {
            'whitespace-pre': char === ' '
          })}
        >
          {char}
        </span>
      ))}
    </p>
  );
};

export default TextAnimationWidget;
