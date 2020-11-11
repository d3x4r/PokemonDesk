import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';
import style from './Home.module.scss';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={style['home-page']}>
      <Layout>
        <div className={style['home-page__content-wrapper']}>
          <div className={style['home-page__text-column']}>
            <Heading className={style['home-page__title']}>
              <b>Find</b> all your favorite <b>Pokemon</b>
            </Heading>
            <p className={style['home-page__text']}>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </p>
            <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
          </div>
          <div className={style['home-page__img-column']}>
            <Parallax />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
