import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  margin-bottom: 10px;
`;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 100%;
  height: 200px;
`;
