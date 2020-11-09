import React from 'react';
import cn from 'classnames';
import style from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import data from './data';

interface PokedexPageProps {
  title: string;
}

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  return (
    <div className={style.pokedex}>
      <Header />
      <Layout>
        <div className={style['pokedex__pokemon-list']}>
          {data.map((pokemonInfo, index) => {
            const classes = {
              [style['pokedex__pokemon-item']]: true,
              [style['pokedex__pokemon-item--middle-item']]: (index + 1) % 3 === 2,
            };

            return <PokemonCard className={cn(classes)} pokemonInfo={pokemonInfo} />;
          })}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
