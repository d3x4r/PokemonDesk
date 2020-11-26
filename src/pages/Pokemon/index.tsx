import React from 'react';
import useData from '../../hook/getData';
import { PokemonInfoType } from '../Pokedex/data';

export interface PokemonPageProps {
  id: string | number;
}

const PokemonPage = ({ id }: PokemonPageProps) => {
  const { data, isLoading } = useData<PokemonInfoType>('getPokemon', { id });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <div>this is pokemon page {`${data?.name}`}</div>;
};

export default PokemonPage;
