/* eslint-disable camelcase */
import React from 'react';
import cn from 'classnames';
import { PokemonInfoType } from '../../pages/Pokedex/data';
import style from './PokemonCard.module.scss';
import Heading from '../Heading';

interface PokemonCardProps {
  className: string;
  pokemonInfo: PokemonInfoType;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonInfo: { types, stats, img, name }, className }) => {
  const pokemonTypesBadges = types.map((pokemonTypeName) => {
    return <li className={cn(style['pokemon-card__type-badge'])}>{pokemonTypeName}</li>;
  });

  const themedImageClassName = `pokemon-card__img-container--${types[0]}`;

  const themeDefined = themedImageClassName in style;

  return (
    <div className={cn(style['pokemon-card'], className)}>
      <div className={style['pokemon-card__info-container']}>
        <Heading className={style['pokemon-card__title']} as="h3">
          {name}
        </Heading>
        <ul className={style['pokemon-card__stat-list']}>
          <li className={style['pokemon-card__stat-container']}>
            <span className={style['pokemon-card__stat']}>{stats.defense}</span>
            <span className={style['pokemon-card__stat-title']}>Attack</span>
          </li>
          <li className={style['pokemon-card__stat-container']}>
            <span className={style['pokemon-card__stat']}>{stats.attack}</span>
            <span className={style['pokemon-card__stat-title']}>Defense</span>
          </li>
        </ul>
        <ul className={style['pokemond-card__types-list']}>{pokemonTypesBadges}</ul>
      </div>
      <div
        className={cn(
          style['pokemon-card__img-container'],
          themeDefined ? style[themedImageClassName as keyof typeof style] : '',
        )}>
        <img className={style['pokemon-card__img']} src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
