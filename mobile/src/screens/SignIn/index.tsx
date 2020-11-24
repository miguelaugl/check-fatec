import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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
import { useAuth } from '../../context/auth';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleLogin() {
    signIn(email, password);
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
            secureTextEntry={true}
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
        <RegisterButton onPress={() => navigation.navigate('SignUp')}>
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

export default SignIn;