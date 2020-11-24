import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMail, FiLock, FiUser, FiCreditCard } from 'react-icons/fi';

import Swal from 'sweetalert2';
import logoImg from '../assets/logo.png';
import api from '../services/api';

import { Container, Form } from '../styles/pages/SignUp';

const SignUp: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  async function handleRegisterClick() {
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Erro!',
        text: 'Senhas não conferem',
        icon: 'error',
        confirmButtonText: 'Entendi',
      });

      return;
    }

    const professor = {
      name,
      cpf,
      email,
      password,
    };

    await api.post('/professors', professor);

    router.push('/');
  }

  function CPFMask(value) {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  return (
    <Container>
      <img src={logoImg} alt="Logo Facheck" />
      <Form>
        <div className="input-group">
          <input
            name="name"
            type="text"
            value={name}
            placeholder="nome completo"
            onChange={(e) => setName(e.target.value)}
          />
          <FiUser size={16} color="#000" />
        </div>

        <div className="input-group">
          <input
            name="email"
            type="text"
            value={email}
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FiMail size={16} color="#000" />
        </div>

        <div className="input-group">
          <input
            name="cpf"
            type="text"
            value={cpf}
            placeholder="CPF"
            onChange={(e) => setCpf(CPFMask(e.target.value))}
          />
          <FiCreditCard size={16} color="#000" />
        </div>

        <div className="input-group">
          <input
            name="password"
            type="password"
            value={password}
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FiLock size={16} color="#000" />
        </div>

        <div className="input-group">
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            placeholder="confirmar senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FiLock size={16} color="#000" />
        </div>

        <button type="button" onClick={handleRegisterClick}>
          Criar conta
        </button>

        <Link href="/">Já sou cadastrado</Link>
      </Form>
    </Container>
  );
};

export default SignUp;
