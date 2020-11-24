import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../context/auth';

// import { Container } from './styles';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#76C9F1'}}>
      <Text>Seja bem-vindo, {user?.name}</Text>
    </View>
  );
}

export default Home;