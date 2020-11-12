import React from 'react';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const navigationData = [
  {
    title: 'Home',
    url: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    url: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    url: LinkEnum.LEGENDARIES,
    component: () => <PokedexPage />,
  },
  {
    title: 'Documentation',
    url: LinkEnum.DOCUMENTATION,
    component: () => <PokedexPage />,
  },
];

const routes: { [item: string]: () => JSX.Element } = navigationData.reduce((acc, { url, component }) => {
  return { ...acc, [url]: component };
}, {});

export default routes;
