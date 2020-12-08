import React from 'react';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import subImage from '../../assets/grupo-de-amigos.png';

import { useAuth } from '../../context/auth';

import {
  Container,
  Logo,
  SubImage,
  InformationContainer,
  InformationRow,
  InformationColumn,
  Label,
  Information,
  Button,
  ButtonText,
} from './styles';

const Scanned: React.FC = ({ route }) => {
  const navigation = useNavigation();
  
  const { user } = useAuth();

  const rotation = route.params.rotation;

  return (
    <Container>
      <Logo source={logoImg} />

      <InformationContainer>
        <Label>Seus dados:</Label>
        <Information>Nome: {user?.name}</Information>
        <Information style={{ marginBottom: 15 }}>RA: {user?.ra}</Information>

        <InformationRow style={{ marginBottom: 15 }}>
          <InformationColumn>
            <Label>Matéria:</Label>
            <Information>{rotation.subject}</Information>
          </InformationColumn>

          <InformationColumn>
            <Label>N° Lab:</Label>
            <Information style={{ marginBottom: 15 }}>{rotation.labNumber}</Information>
          </InformationColumn>
        </InformationRow>

        <Label>Horário de início</Label>
        <Information style={{ marginBottom: 15 }}>{rotation.initTime}</Information>

        <Label>Horário para acabar</Label>
        <Information style={{ marginBottom: 15 }}>{rotation.endTime}</Information>

        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>
            Voltar para o dashboard
          </ButtonText>
        </Button>
      </InformationContainer>
      <SubImage source={subImage} />
    </Container>
  );
}

export default Scanned;