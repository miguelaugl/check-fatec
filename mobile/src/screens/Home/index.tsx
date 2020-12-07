import React from 'react';
import { useAuth } from '../../context/auth';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import subImage from '../../assets/grupo-de-amigos.png';
import qrImage from '../../assets/qrcode.png';

import {
  Container,
  Logo,
  SubImage,
  QRContainer,
  Welcome,
  WelcomeRed,
  QRMessage,
  QRImage,
  ScanButton,
  ScanButtonText,
} from './styles';

const Home: React.FC = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <Container>
      <Logo source={logoImg} />

      <Welcome>Seja bem-vindo, <WelcomeRed>{user?.name}</WelcomeRed></Welcome>

      <QRContainer>
        <QRMessage>Escaneie o código QR próximo a sua sala</QRMessage>
        <QRImage source={qrImage} />

        <ScanButton onPress={() => navigation.navigate('BarCodeScanner')}>
          <ScanButtonText>Escanear</ScanButtonText>
          <Feather name="camera" size={20} color="#fff" />
        </ScanButton>
      </QRContainer>

      <SubImage source={subImage} />
    </Container>
  );
}

export default Home;