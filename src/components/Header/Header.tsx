import React from 'react';
import cn from 'classnames';
import style from './Header.module.scss';

import Logo from '../Logo';

const Header = () => {
  return (
    <div className={cn(style.header)}>
      <div className={cn(style['header__content-wrapper'])}>
        <a href="#">
          <Logo />
        </a>
        <ul className={cn(style.header__navigation)}>
          <li className={cn(style['header__navigation-item'], style['header__navigation-item--active'])}>Home</li>
          <li className={cn(style['header__navigation-item'])}>Pokédex</li>
          <li className={cn(style['header__navigation-item'])}>Legendaries</li>
          <li className={cn(style['header__navigation-item'])}>Documentation</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
