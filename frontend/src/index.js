import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Tek bir App importu
import './i18n'; // i18n yapılandırması

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);