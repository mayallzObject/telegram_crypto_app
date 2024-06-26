import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { publicRoutes } from './routes';

import './App.css';

function App() {
  const router = createBrowserRouter(publicRoutes);

  return <RouterProvider router={router} />;
}

export default App;
