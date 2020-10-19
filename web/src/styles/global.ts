import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1.8rem Roboto, sans-serif;
  }

  body {
    min-height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    body,
    input,
    button,
    textarea {
      font-size: 1.4rem;
    }
  }
`;
