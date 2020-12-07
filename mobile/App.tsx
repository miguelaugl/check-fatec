import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';

import Routes from './src/routes';
import { AuthProvider } from './src/context/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <AuthProvider>
        <StatusBar style="auto" />
        <Routes />
      </AuthProvider>
    </>
  );
}
