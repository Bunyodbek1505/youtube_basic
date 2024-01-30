import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />    
    </BrowserRouter>
  </React.StrictMode>
);
