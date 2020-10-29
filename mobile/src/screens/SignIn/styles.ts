import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background: #76C9F1;
  align-items: center;
  padding: 0 25px;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 150px;
`;

export const SubImage = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  /* width: 100%; */
  height: 200px;
  margin-top: auto;
`;

export const Form = styled.View`
  width: 100%;
  background: #fff;
  padding: 30px;
  margin-top: 50px;
`;

export const InputContainer = styled.View`
  position: relative;
  border-radius: 4px;
  border-width: 1px;
  border-color: #000;
  margin-bottom: 18px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  height: 45px;
  padding: 0 10px;
  width: 100%;
`;

export const InputIcon = styled(Feather)`
  position: absolute;
  right: 10px;
`;

export const SubmitButton = styled(RectButton)`
  background: #d91954;
  border-radius: 4px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: 'Poppins_400Regular';
`;

export const ForgotButton = styled.TouchableOpacity``;

export const ForgotButtonText = styled.Text`
  font-size: 14px;
  color: #000;
  text-align: center;
  margin-top: 20px;
  font-family: 'Poppins_400Regular';
`;

export const SubForm = styled.View`
  background: #fff;
  margin-top: 12px;
  width: 100%;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 0;
  flex-direction: row;
  justify-content: center;
`;

export const RegisterButtonText = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: 'Poppins_400Regular';
`;

export const RegisterButtonTextRed = styled(RegisterButtonText)`
  color: #d91954;
`;
