import React from 'react';
import cn from 'classnames';
import style from './Header.module.scss';

import Logo from '../Logo';

const Header = () => {
  const navigationLinksData = [
    {
      name: 'Home',
      url: '#',
    },
    {
      name: 'Pokédex',
      url: '#',
    },
    {
      name: 'Legendaries',
      url: '#',
    },
    {
      name: 'Documentation',
      url: '#',
    },
  ];

  const links = navigationLinksData.map(({ name, url }) => (
    <li className={cn(style['header__navigation-item'])} key={name}>
      <a className={cn(style['header__navigation-link'])} href={url}>
        {name}
      </a>
    </li>
  ));

  return (
    <div className={cn(style.header)}>
      <div className={cn(style['header__content-wrapper'])}>
        <a href="#">
          <Logo />
        </a>
        <ul className={cn(style.header__navigation)}>
          {links}
          {/* <li className={cn(style['header__navigation-item'], style['header__navigation-item--active'])}>Home</li>
          <li className={cn(style['header__navigation-item'])}>Pokédex</li>
          <li className={cn(style['header__navigation-item'])}>Legendaries</li>
          <li className={cn(style['header__navigation-item'])}>Documentation</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
