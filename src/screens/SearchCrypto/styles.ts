import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #242134;
`;

export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${screenWidth}px;
  height: 200px;
  background: #242134;
`;

export const InputArea = styled.View`
  align-items: center;
  width: 80%;
  background: orange;
  border: 1px solid;
  border-color: #1e1b2b;
  border-radius: 10px;
  padding: 0 20px;
  background: #29283f;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 60px;
  font-size: 18px;
  background: #29283f;
  color: #ffff;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 16px;
  color: #ffff;
  font-weight: bold;
`;
