import React from 'react';
import cn from 'classnames';
import style from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isYellow?: boolean;
  isFullWidth?: boolean;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ children, isYellow, isFullWidth, size, onClick }) => {
  const styles = {
    [style.button]: true,
    [style['button--yellow']]: isYellow,
    [style['button--full-width']]: isFullWidth,
    [style['button--small']]: size === 'small',
  };

  return (
    <button className={cn(styles)} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
