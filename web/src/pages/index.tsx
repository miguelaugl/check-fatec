import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../assets/logo.png';

import { Container, Form } from '../styles/pages/SignIn';

const Home: React.FC = () => {
  const router = useRouter();

  function handleLoginClick() {
    router.push('/dashboard');
  }

  return (
    <Container>
      <img src={logoImg} alt="Logo Facheck" />
      <Form>
        <div className="input-group">
          <input type="text" placeholder="e-mail" />
          <FiMail size={16} color="#000" />
        </div>

        <div className="input-group">
          <input type="text" placeholder="senha" />
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
