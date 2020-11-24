import { useRouter } from 'next/router';
import React, { createContext, useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import api from '../services/api';

interface User {
  name: string;
  email: string;
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

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   async function loadStorageData() {
  //     const storagedUser = localStorage.getItem('@RNAuth:user');
  //     const storagedToken = localStorage.getItem('@RNAuth:token');

  //     if (storagedUser && storagedToken) {
  //       setUser(JSON.parse(storagedUser));
  //       api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
  //       router.push('/dashboard');
  //     }

  //     setLoading(false);
  //   }

  //   loadStorageData();
  // });

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post<Response>('/professors/login', {
        email,
        password,
      });

      setUser(response.data.user);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      localStorage.setItem('@RNAuth:user', JSON.stringify(response.data.user));
      localStorage.setItem('@RNAuth:token', response.data.token);

      router.push('/dashboard');
    } catch (err) {
      Swal.fire({
        title: 'Erro!',
        text: 'Combinação de login incorreta',
        icon: 'error',
        confirmButtonText: 'Entendi',
      });
    }
  }

  async function signOut() {
    localStorage.clear();
    setUser(null);

    router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
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

export { AuthProvider, useAuth };
