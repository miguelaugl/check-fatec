import styled from 'styled-components';

import loginBackground from '../../assets/login-background.jpg';

export const Container = styled.div`
  color: #000;
  background-image: url(${loginBackground});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sub-form {
    width: 100%;
    max-width: 32rem;
    background: #fff;
    margin-top: 0.8rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: ${(props) => props.theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Form = styled.form`
  background: #fff;
  width: 100%;
  max-width: 32rem;
  height: 33rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    margin: 0 auto 4rem auto;
  }

  .input-group {
    position: relative;
    width: 100%;
    max-width: 24rem;

    input {
      width: 100%;
      height: 4rem;
      border: 0.1rem solid #000000;
      box-sizing: border-box;
      border-radius: 0.4rem;
      padding: 0 3rem 0 1rem;
      margin-bottom: 1.2rem;

      &::placeholder {
        color: #000000;
      }
    }

    svg {
      position: absolute;
      top: 1.1rem;
      right: 1rem;
    }
  }

  button {
    width: 100%;
    max-width: 24rem;
    height: 4rem;
    border-radius: 0.4rem;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    transition: background-color 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${(props) => props.theme.colors.primaryHover};
    }
  }

  a {
    color: #000000;
    margin-top: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
