import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import React from 'react';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
