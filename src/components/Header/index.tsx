import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import style from './Header.module.scss';
import { ReactComponent as PokemonLogo } from '../../../assets/logo.svg';

const Header = () => {
  const pathname = usePath();

  const navigationLinksData = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Pokédex',
      url: '/pokedex',
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
    <li
      className={cn(style['header__navigation-item'], url === pathname ? style['header__navigation-item--active'] : '')}
      key={name}>
      <A className={cn(style['header__navigation-link'])} href={url}>
        {name}
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
