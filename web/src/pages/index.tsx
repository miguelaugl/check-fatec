import React from 'react';

import checkFatecLogo from '../assets/check-fatec-logo.png';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>
      <img src={checkFatecLogo} alt="Check Fatec Logo" />
    </Container>
  );
};

export default Home;
