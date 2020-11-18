import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import style from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import { API } from './data';
import config from '../../config';

const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({} as API);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const {
        client: {
          server: { host, protocol },
          endpoint: {
            getPokemons: {
              uri: { pathname },
            },
          },
        },
      } = config;
      const url = `${protocol}://${host}${pathname}`;
      try {
        const response = await fetch(url);
        const body: API = await response.json();
        setData(body);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    isLoading,
    data,
    errorMessage,
  };
};

const PokedexPage: React.FC = () => {
  const {
    data: { count, pokemons },
    isLoading,
    errorMessage,
  } = usePokemons();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className={style.pokedex}>
      <Layout>
        <Heading className={style.pokedex__header} as="h3">
          {count} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={style['pokedex__pokemon-list']}>
          {pokemons.map((pokemonInfo, index) => {
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
