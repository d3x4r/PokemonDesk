import React from 'react';
import cn from 'classnames';
import style from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { API } from './data';

const PokedexPage: React.FC = () => {
  const { data, isLoading, errorMessage } = useData<API>('getPokemons');

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (data === null) {
    return null;
  }

  return (
    <div className={style.pokedex}>
      <Layout>
        <Heading className={style.pokedex__header} as="h3">
          {data.count} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={style['pokedex__pokemon-list']}>
          {data.pokemons.map((pokemonInfo, index) => {
            const classes = {
              [style['pokedex__pokemon-item']]: true,
              [style['pokedex__pokemon-item--middle-item']]: (index + 1) % 3 === 2,
            };

            return <PokemonCard className={cn(classes)} pokemonInfo={pokemonInfo} key={pokemonInfo.name} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
