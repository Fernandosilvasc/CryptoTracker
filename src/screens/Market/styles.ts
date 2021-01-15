import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #242134;
`;

export const ImgContainer = styled.View`
  margin: 20px 0;
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.25}px;
  background: pink;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #242134;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const TextTitle = styled.Text`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;
