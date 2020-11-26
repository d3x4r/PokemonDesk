import React, { useState } from 'react';
import cn from 'classnames';
import style from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { API } from './data';

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({ name: '' });
  const { data, isLoading, errorMessage } = useData<API>('getPokemons', query, [searchValue]);

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((e) => ({
      name: event.target.value,
    }));
  };

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (data === null) {
    return null;
  }

  const pokenonsList = (
    <div className={style['pokedex__pokemon-list']}>
      {data.pokemons.map((pokemonInfo, index) => {
        const classes = {
          [style['pokedex__pokemon-item']]: true,
          [style['pokedex__pokemon-item--middle-item']]: (index + 1) % 3 === 2,
        };

        return <PokemonCard className={cn(classes)} pokemonInfo={pokemonInfo} key={pokemonInfo.name} />;
      })}
    </div>
  );

  return (
    <div className={style.pokedex}>
      <Layout>
        <Heading className={style.pokedex__header} as="h3">
          {data.count} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={onChangeSearchValue} />
        </div>
        {!isLoading && pokenonsList}
      </Layout>
    </div>
  );
};

export default PokedexPage;
