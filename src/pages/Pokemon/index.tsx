import React from 'react';

export interface PokemonPageProps {
  id: string | number;
}

const PokemonPage = ({ id }: PokemonPageProps) => {
  return <div>this is pokemon page {`${id}`}</div>;
};

export default PokemonPage;
