import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  const match = useRoutes(routes);

  if (match) {
    return (
      <>
        <Header />
        {match}
        <Footer />
      </>
    );
  }

  return <div>404 page</div>;
};
export default App;
