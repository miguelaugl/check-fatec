import React, { useEffect, useState } from 'react';
import { BarCodeScanner as Scanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

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
import api from '../../services/api';

const BarCodeScanner: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const {} = await Scanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  async function handleBarCodeScanned({ data }: BarCodeScannerResult) {
    const response = await api.get(`/rotations/${data}`);

    setScanned(true);

    navigation.navigate('Scanned', {
      rotation: response.data,
    });
  };

  return (
    <Container>
      <Logo source={logoImg} />

      <QRContainer>
        <QRMarker source={qrMarkerImg} />
        <QRText>Aponte a câmera para o código QR</QRText>
        <QRScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </QRContainer>

    </Container>
  );
}

export default BarCodeScanner;