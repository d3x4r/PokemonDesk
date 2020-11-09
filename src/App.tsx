import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import './style.css';

const App = () => {
  const match = useRoutes(routes);
  return match || <div>404 page</div>;
};
export default App;
