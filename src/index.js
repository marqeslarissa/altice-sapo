import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Footer from './views/Footer';
import Header from './views/Header';
import Home from './views/Home/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header />
     <Home />
      <Footer />
  </React.StrictMode>
);
