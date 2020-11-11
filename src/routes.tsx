import React from 'react';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

export const navigationData = [
  {
    title: 'Home',
    url: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    url: '/pokedex',
    component: () => <PokedexPage title="Pokédex" />,
  },
  {
    title: 'Legendaries',
    url: '/legendaries',
    component: () => <PokedexPage title="Pokédex" />,
  },
  {
    title: 'Documentation',
    url: '/documentation',
    component: () => <PokedexPage title="Pokédex" />,
  },
];

const routes: { [item: string]: () => JSX.Element } = navigationData.reduce((acc, { url, component }) => {
  return { ...acc, [url]: component };
}, {});

export default routes;
