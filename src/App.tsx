import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import './style.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pokedex" component={PokedexPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};
export default App;
