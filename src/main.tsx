import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TooltipProvider } from './components/ui/tooltip.tsx';
// import Home from './pages/Home.tsx';
// import About from './pages/About.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   { path: '/', element: <Home /> },
    //   { path: '/about', element: <About /> },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  </React.StrictMode>,
);
