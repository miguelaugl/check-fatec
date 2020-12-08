import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import logoImg from '../../assets/logo.png';
import subImage from '../../assets/grupo-de-amigos.png';
import qrImage from '../../assets/qrcode.png';
import noPhotoImage from '../../assets/no-photo.png';
import api from '../../services/api';

import {
  Container,
  Logo,
  Avatar,
  SubImage,
  QRContainer,
  Welcome,
  WelcomeRed,
  QRMessage,
  QRImage,
  ScanButton,
  ScanButtonText,
} from './styles';

const Home: React.FC = () => {
  const { user, loading, signOut } = useAuth();

  const navigation = useNavigation();
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const data = new FormData();

      data.append('file', {
        filename: 'IMG_' + Math.random(4000),
        uri: result.uri,
      });

      console.log(result);

      await api.patch('/students', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }
  };

  if (loading) {
    return <AppLoading />
  }

  const avatarURL = `http://192.168.1.108:3333/files/${user?.avatar}`;

  return (
    <Container>
      <Logo source={logoImg} />

      <TouchableOpacity onPress={pickImage}>
        <Avatar source={user?.avatar ? {
          uri: avatarURL
        } : noPhotoImage} />
      </TouchableOpacity>

      <Welcome>Seja bem-vindo, <WelcomeRed>{user?.name}</WelcomeRed></Welcome>

      <QRContainer>
        <QRMessage>Escaneie o código QR próximo a sua sala</QRMessage>
        <QRImage source={qrImage} />

        <ScanButton onPress={() => navigation.navigate('BarCodeScanner')}>
          <ScanButtonText>Escanear</ScanButtonText>
          <Feather name="camera" size={20} color="#fff" />
        </ScanButton>
      </QRContainer>

      <SubImage source={subImage} />
    </Container>
  );
}

export default Home;