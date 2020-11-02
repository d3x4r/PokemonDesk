import React from 'react';
import style from './App.modules.scss';
import cn from 'classnames';
import './index.css';

const App = () => {
  return <div className={cn(style.header)}>This is App Component!!</div>;
};

export default App;
