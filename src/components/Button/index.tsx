import React from 'react';
import cn from 'classnames';
import style from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={cn(style.button)} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
