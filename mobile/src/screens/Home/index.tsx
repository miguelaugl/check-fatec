import React, { useState } from 'react';

import logoImg from '../../assets/logo.png';
import subImage from '../../assets/grupo-de-amigos.png';

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
  SubForm,
  RegisterButton,
  RegisterButtonText,
  RegisterButtonTextRed,
} from './styles';

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleLogin() {
    console.log(email, password);
  }
  
  return (
    <Container>
      <Logo source={logoImg} />

      <Form>
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

        <SubmitButton onPress={handleLogin}>
          <SubmitButtonText>
            Login
          </SubmitButtonText>
        </SubmitButton>

        <ForgotButton>
          <ForgotButtonText>Esqueceu a senha?</ForgotButtonText>
        </ForgotButton>
      </Form>

      <SubForm>
        <RegisterButton>
          <RegisterButtonText>
            Não tem uma conta?
          </RegisterButtonText>
          <RegisterButtonTextRed>
          {' '}Cadastre-se
          </RegisterButtonTextRed>
        </RegisterButton>
      </SubForm>

      <SubImage source={subImage} />
    </Container>
  );
}

export default Home;