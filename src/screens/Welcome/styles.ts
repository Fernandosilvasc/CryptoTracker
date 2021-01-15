import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
// const screenHeight = Math.round(Dimensions.get('window').height);

export const Container = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  justify-content: center;
  align-items: center;
  background: #242134;
  overflow: hidden;
`;

export const SquareGreenTop = styled.View`
  width: 600px;
  height: 200px;
  position: absolute;
  top: -130px;
  background: #00bd9a;
  transform: rotate(-20deg);
`;

export const SquareWhiteTop = styled.View`
  width: 600px;
  height: 200px;
  position: absolute;
  top: -110px;
  background: #ffff;
  transform: rotate(-20deg);
  z-index: -1;
`;

export const SquareGreenBottom = styled.View`
  width: 600px;
  height: 200px;
  position: absolute;
  bottom: -130px;
  background: #00bd9a;
  transform: rotate(-20deg);
`;

export const SquareWhiteBottom = styled.View`
  width: 600px;
  height: 200px;
  position: absolute;
  bottom: -110px;
  background: #ffff;
  transform: rotate(-20deg);
  z-index: -1;
`;

export const ActivityIndicatorContainer = styled.View`
  margin-top: 70px;
  justify-content: center;
  align-items: center;
`;
