import React from 'react';
import style from './Home.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div className={style['home-page']}>
      <Header />
      <Footer />
    </div>
  );
};

export default HomePage;
