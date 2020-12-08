import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import BarCodeScanner from '../screens/BarCodeScanner';
import Scanned from '../screens/Scanned';
import { useAuth } from '../context/auth';

const StackNavigator: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Navigator headerMode="none">
      {signed ? (
        <>
          <Screen name="Home" component={Home} />
          <Screen name="BarCodeScanner" component={BarCodeScanner} />
          <Screen name="Scanned" component={Scanned} />
        </>
      ) : (
        <>
          <Screen name="SignIn" component={SignIn} />
          <Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Routes;