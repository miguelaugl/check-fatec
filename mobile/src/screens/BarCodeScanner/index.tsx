import React, { useEffect, useState } from 'react';
import { BarCodeScanner as Scanner, BarCodeScannerResult } from 'expo-barcode-scanner';

import {
  Container,
  Logo,
  QRContainer,
  QRMarker,
  QRText,
  QRScanner,
} from './styles';

import qrMarkerImg from '../../assets/qrmarker.png';
import logoImg from '../../assets/logo.png';
import { Alert } from 'react-native';

const BarCodeScanner: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const {} = await Scanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function handleBarCodeScanned({ data }: BarCodeScannerResult) {
    Alert.alert('Leitura realizada com sucesso!', `${data}`);
  };

  return (
    <Container>
      <Logo source={logoImg} />

      <QRContainer>
        <QRMarker source={qrMarkerImg} />
        <QRText>Aponte a câmera para o código QR</QRText>
        <QRScanner
          onBarCodeScanned={handleBarCodeScanned}
        />
      </QRContainer>

    </Container>
  );
}

export default BarCodeScanner;