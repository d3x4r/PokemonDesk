import React from 'react';
import cn from 'classnames';
import style from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import data from './data';

const PokedexPage: React.FC = () => {
  return (
    <div className={style.pokedex}>
      <Layout>
        <div className={style['pokedex__pokemon-list']}>
          {data.map((pokemonInfo, index) => {
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
