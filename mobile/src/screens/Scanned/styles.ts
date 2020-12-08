import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

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
  height: 150px;
  margin-top: auto;
`;

export const InformationContainer = styled.View`
  width: 100%;
  background: #fff;
  padding: 30px;
  margin-top: 10px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: 'Poppins_700Bold';
`;

export const Information = styled.Text`
  font-size: 15px;
  font-family: 'Poppins_400Regular';
`;

export const InformationRow = styled.View`
  flex-direction: row;
`;

export const InformationColumn = styled.View`
  margin-right: 25px;
`;

export const Button = styled(RectButton)`
  background: #d91954;
  border-radius: 4px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: 'Poppins_400Regular';
`;
