import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 60rem;
  background: #fff;
  padding: 3.2rem;
  border-radius: 0.5rem;

  h2 {
    color: #000;
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-family: Oswald, sans-serif;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 80%;
    margin: 0 auto;
    display: block;
  }

  .input-group {
    display: flex;
  }

  label {
    font-size: 16px;
    flex: 1;

    & + label {
      margin-left: 2rem;
    }

    input {
      border: 1px solid rgba(0, 0, 0, 0.2);
      width: 100%;
      margin-bottom: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  }

  button {
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    height: 5rem;
    padding: 0 3rem;
    color: #fff;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    transition: background-color 0.4s;
    font-size: 18px;
    margin-top: 2rem;
    margin-left: auto;

    &:hover {
      background: ${(props) => props.theme.colors.primaryHover};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const SideBar = styled.aside`
  min-height: 100vh;
  width: 100%;
  max-width: 30rem;
  background: ${(props) => props.theme.colors.secondary};
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  .profile {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }

  p {
    color: #fff;
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
  }

  @media screen and (max-width: 1110px) {
    position: fixed;
    bottom: 0;
    max-width: initial;
    flex-direction: row;
    min-height: initial;
    height: 6rem;
    z-index: 1;

    .profile {
      display: none;
    }
  }
`;

export const SideNav = styled.nav`
  width: 100%;

  display: flex;
  flex-flow: column;

  a {
    color: #fff;
    font-size: 1.6rem;
    padding: 1.5rem 2rem;
    cursor: pointer;

    display: flex;
    align-items: center;

    &:first-child {
      background: ${(props) => props.theme.colors.primary};
    }

    svg {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 1110px) {
    flex-direction: row;
    justify-content: center;
    height: 100%;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    a {
      font-size: 0;
      width: 100%;
      justify-content: center;

      svg {
        margin: 0;
      }
    }
  }
`;

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  margin-bottom: 6rem;

  display: flex;

  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
`;

export const LeftSide = styled.div`
  padding: 4rem 3rem;
  width: 50%;
  border-right: 2px solid ${(props) => props.theme.colors.shadow};

  h2 {
    color: #000;
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-family: Oswald, sans-serif;
    font-weight: 400;
  }

  > p {
    color: ${(props) => props.theme.colors.secondary};
    font-family: Oswald, sans-serif;
    font-size: 1.8rem;
    font-weight: 300;
  }

  img {
    display: block;
    margin: 3rem auto 0 auto;
    max-width: 100%;
  }

  ul {
    margin-top: 2rem;
    list-style: none;
    overflow: auto;
  }

  .create {
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    height: 3.5rem;
    padding: 0 3rem;
    color: #fff;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
    transition: background-color 0.4s;

    &:hover {
      background: ${(props) => props.theme.colors.primaryHover};
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.colors.shadow};
    padding: 4rem 1.6rem;
  }
`;

export const Class = styled.li`
  width: 100%;
  max-width: 34rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  padding: 1.2rem 1.5rem;
  border-radius: 0.8rem;
  transition: transform 0.4s;
  cursor: pointer;

  display: flex;
  align-items: center;

  div {
    strong {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 400;
    }
  }

  svg {
    margin-left: auto;
    color: ${(props) => props.theme.colors.primary};
  }

  & + li {
    margin-top: 1rem;
  }

  &:hover {
    transform: translateX(10px);
  }
`;

export const RightSide = styled.div`
  width: 50%;
  padding: 4rem 3rem;

  h2 {
    color: #000;
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-family: Oswald, sans-serif;
    font-weight: 400;
  }

  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.8rem;
    font-family: Oswald, sans-serif;
    font-weight: 400;
  }

  h4 {
    color: #000;
    font-size: 1.8rem;
    font-family: Oswald, sans-serif;
    font-weight: 400;
    margin-top: 3rem;
  }

  ul {
    margin: 2rem 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    gap: 1rem;

    &:first-of-type {
      opacity: 0.3;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 4rem 1.6rem;

    ul {
      grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    }
  }
`;

export const Student = styled.li`
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 3.5rem;
      height: 3.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
