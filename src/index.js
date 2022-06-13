import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './components/context/context';
import Root from './components/root';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <Root/>
    </Context>
  </React.StrictMode>
);

