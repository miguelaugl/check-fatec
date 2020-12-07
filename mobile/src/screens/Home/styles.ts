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
  height: 200px;
  margin-top: auto;
`;

export const QRContainer = styled.View`
  background: #fff;
  border-radius: 10px;
  padding: 15px 30px;
`;

export const Welcome = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_700Bold';
  color: #000;
  text-align: center;
  margin-bottom: 15px;
`;

export const WelcomeRed = styled(Welcome)`
  color: #fff;
`;

export const QRMessage = styled.Text`
  font-size: 15px;
  font-family: 'Poppins_400Regular';
  color: #000;
  text-align: center;
`;

export const QRImage = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  margin: 0 auto;
`;

export const ScanButton = styled(RectButton)`
  background: #d91954;
  border-radius: 4px;
  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ScanButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'Poppins_400Regular';
  margin-right: 5px;
`;
