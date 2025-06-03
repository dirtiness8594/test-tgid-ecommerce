import { createBrowserRouter } from 'react-router-dom';
import Home from '../features/home/pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home /> 
  },
]);

export default router;
