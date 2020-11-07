import React, { useState, useEffect } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/Pokeball2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setScreenX(e.screenX);
      setScreenY(e.screenY);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={s.parallax}>
      <div className={s.smallPokeBall} style={{ transform: `translate(${screenX * 0.015}px, ${screenY * 0.015}px)` }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={s.cloud} style={{ transform: `translate(${screenX * 0.005}px, ${screenY * 0.005}px)` }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={s.cloudBig} style={{ transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)` }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div className={s.pokeBall} style={{ transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px)` }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div className={s.pikachu} style={{ transform: `translate(${screenX * 0.005}px, ${screenY * 0.005}px)` }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
