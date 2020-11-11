import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import style from './Header.module.scss';
import { ReactComponent as PokemonLogo } from '../../../assets/logo.svg';
import { navigationData } from '../../routes';

const Header = () => {
  const pathname = usePath();

  const links = navigationData.map(({ title, url }) => (
    <li
      className={cn(style['header__navigation-item'], url === pathname ? style['header__navigation-item--active'] : '')}
      key={title}>
      <A className={cn(style['header__navigation-link'])} href={url}>
        {title}
      </A>
    </li>
  ));

  return (
    <div className={cn(style.header)}>
      <div className={cn(style['header__content-wrapper'])}>
        <a href="#">
          <PokemonLogo />
        </a>
        <ul className={cn(style.header__navigation)}>{links}</ul>
      </div>
    </div>
  );
};

export default Header;
