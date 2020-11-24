import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMail, FiLock } from 'react-icons/fi';
import Swal from 'sweetalert2';

import logoImg from '../assets/logo.png';

import { Container, Form } from '../styles/pages/SignIn';
import { useAuth } from '../context/auth';

const Home: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signed } = useAuth();

  function handleLoginClick() {
    signIn(email, password);

    if (signed) {
      router.push('/dashboard');
    }
  }

  return (
    <Container>
      <img src={logoImg} alt="Logo Facheck" />
      <Form>
        <div className="input-group">
          <input
            type="text"
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <FiMail size={16} color="#000" />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <FiLock size={16} color="#000" />
        </div>

        <button type="button" onClick={handleLoginClick}>
          Login
        </button>

        <Link href="">Esqueceu a senha?</Link>
      </Form>

      <div className="sub-form">
        <p>
          Não tem uma conta? <Link href="/sign-up">Cadastre-se</Link>
        </p>
      </div>
    </Container>
  );
};

export default Home;
