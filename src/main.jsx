import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Yahan import karein
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Yeh wrapper hona bohot zaroori hai */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);