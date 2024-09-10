import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { NewPage } from './pages/NewPage';
import { BlockPage } from './pages/BlockPage';
import { SubBlockPage } from './pages/SubBlockPage';

export default function App() {
  const router = createBrowserRouter([{
      path: "/",
      element: <HomePage />
  },{
      path: "/news",
      element: <NewsPage />
  },{
      path: "/news/:newId",
      element: <NewPage />
  },{
      path: "/block",
      element: <BlockPage />
  },{
      path: "/block/subBlock",
      element: <SubBlockPage />
  },]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}