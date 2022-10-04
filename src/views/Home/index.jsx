import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import CompareSpeed from '../../components/CompareSpeed';

const Home = () => {
  return (
    <div>
      <Header />
      <CompareSpeed />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
