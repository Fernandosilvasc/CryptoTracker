import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const Container = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  justify-content: space-between;
  align-items: center;
  background: #242134;
`;

export const Header = styled.View`
  width: ${screenWidth * 0.8}px;
  height: ${screenHeight * 0.1}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #ffffff;
`;

export const TextTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

export const ImgContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.3}px;
  background: pink;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #bdbcc4;
`;

export const Image = styled.Image`
  width: 230px;
  height: 225px;
  border-radius: 20px;
`;

export const WarningArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${screenWidth * 0.9}px;
`;

export const WarnBox = styled.View`
  margin-top: 40px;
`;

export const TextWarn = styled.Text`
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  color: #fff;
`;

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
