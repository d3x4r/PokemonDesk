import React from 'react';
import style from './Home.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={style['home-page']}>
      <Header />
      <Layout>
        <div className={style['home-page__content-wrapper']}>
          <div className={style['home-page__text-column']}>
            <Heading className={style['home-page__title']}>
              <b>Find</b> all your favorite <b>Pokemon</b>
            </Heading>
            <p className={style['home-page__text']}>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </p>
            <Button onClick={() => {}}>See pokemons</Button>
          </div>
          <div className={style['home-page__img-column']}>
            <Parallax />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
