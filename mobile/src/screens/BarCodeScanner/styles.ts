import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: #76C9F1;
  align-items: center;
  padding: 0 16px;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 150px;
`;

export const QRContainer = styled.View`
  position: relative;
  width: 100%;
  height: ${height - 120}px;
  border-radius: 25px;
  align-items: center;
`;

export const QRMarker = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  position: absolute;
  z-index: 1;
  top: ${height / 2 - 240}px;
`;

export const QRText = styled.Text`
  position: absolute;
  z-index: 1;
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #fff;
  top: ${height / 2 - 50}px;
`;

export const QRScanner = styled(BarCodeScanner)`
  width: 100%;
  height: ${height - 120}px;
`;