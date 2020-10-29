import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from './Home';

const Routes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator> 
  );
}

export default Routes;