import React from 'react';
import style from './Home.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className={style['home-page']}>
      <Header />
      <div>
        <Button onClick={() => {}}>See pokemons</Button>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
