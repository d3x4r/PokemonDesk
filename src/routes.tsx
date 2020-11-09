import React from 'react';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <PokedexPage />,
};

export default routes;
