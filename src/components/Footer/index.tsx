import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={cn(s.footer)}>
      <div className={cn(s['footer__content-wrapper'])}>
        <ul className={cn(s['footer__navigation-list'])}>
          <li>
            Make with{' '}
            <span role="img" aria-label="hearth">
              ❤️
            </span>
          </li>
          <li>Ours Team</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Footer);
