import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import subImage from '../../assets/grupo-de-amigos.png';

import api from '../../services/api';

import {
  Container,
  Logo,
  SubImage,
  Form,
  InputContainer,
  Input,
  InputIcon,
  SubmitButton,
  SubmitButtonText,
  ForgotButton,
  ForgotButtonText,
} from './styles';
import { Alert } from 'react-native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState<string>();
  const [ra, setRa] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  async function handleRegister() {
    if (password !== confirmPassword) {
      return Alert.alert('Senhas não batem');
    };

    const student = {
      name,
      ra,
      email,
      password,
    }

    await api.post('/students', student);

    navigation.navigate('Home');
  }
  
  return (
    <Container>
      <Logo source={logoImg} />

      <Form>
        <InputContainer>
          <Input
            placeholder="nome completo"
            placeholderTextColor="#000"
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <InputIcon name="user" size={22} color="#000" />
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="RA"
            placeholderTextColor="#000"
            value={ra}
            onChangeText={(value) => setRa(value)}
          />
          <InputIcon name="mail" size={22} color="#000" />
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="e-mail"
            placeholderTextColor="#000"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <InputIcon name="mail" size={22} color="#000" />
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="senha"
            placeholderTextColor="#000"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <InputIcon name="lock" size={22} color="#000" />
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="confirmar senha"
            placeholderTextColor="#000"
            value={confirmPassword}
            onChangeText={(value) => setConfirmPassword(value)}
          />
          <InputIcon name="lock" size={22} color="#000" />
        </InputContainer>

        <SubmitButton onPress={handleRegister}>
          <SubmitButtonText>
            Criar conta
          </SubmitButtonText>
        </SubmitButton>

        <ForgotButton onPress={() => navigation.navigate('SignIn')}>
          <ForgotButtonText>Já sou cadastrado</ForgotButtonText>
        </ForgotButton>
      </Form>

      <SubImage source={subImage} />
    </Container>
  );
}

export default SignUp;