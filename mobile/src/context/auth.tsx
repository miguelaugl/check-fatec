import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface User {
  name: string;
  email: string;
  avatar: string;
  ra: string;
}

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    const response = await api.post<Response>('/students/login', {
      email,
      password,
    });

    setUser(response.data.user);

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data.user));
    AsyncStorage.setItem('@RNAuth:token', response.data.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};