import React from 'react'

import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CompareSpeed from '../../components/CompareSpeed';

function Home() {
  return (
    <div>
       <Header />
       <CompareSpeed />
       <Footer />
    </div>
  );
}

export default Home;
