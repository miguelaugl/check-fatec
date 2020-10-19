import React from 'react';

import logoImg from '../../assets/check-fatec-logo.png';

import { Container, Title, Logo } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Check Fatec</Title>
      <Logo source={logoImg} />
    </Container>
  );
}

export default Home;