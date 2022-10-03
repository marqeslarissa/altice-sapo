import React from 'react'

import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CompareSpeed from '../../components/CompareSpeed';
import Contact from '../../components/Contact';
import Container from '@mui/material/Container';

function Home() {
  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <CompareSpeed />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
