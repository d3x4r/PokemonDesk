import React from 'react';
import style from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface PokedexPageProps {
  title: string;
}

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  return (
    <div className={style.pokedex}>
      <Header />
      <Footer />
    </div>
  );
};

export default PokedexPage;
