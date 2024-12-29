import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { RouterProvider } from 'react-router-dom';
import router from './components/routing/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,  
)
