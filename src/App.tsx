import { useRoutes } from 'hookrouter';
import routes from './routes';
import './style.css';

const App = () => {
  const match = useRoutes(routes);
  return match;
};
export default App;
