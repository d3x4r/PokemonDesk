import React from 'react';
import style from './Home.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Layout from '../../components/Layout';

const HomePage = () => {
  return (
    <div className={style['home-page']}>
      <Header />
      <Layout>
        <Parallax />
        <Button onClick={() => {}}>See pokemons</Button>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
