import React from 'react';
import { Image, ActivityIndicator } from 'react-native';

import Logo from '../../assets/logo.png';

import {
  Container,
  SquareGreenTop,
  SquareWhiteTop,
  SquareWhiteBottom,
  SquareGreenBottom,
  ActivityIndicatorContainer,
} from './styles';

const Welcome: React.FC = () => (
  <>
    <Container>
      <SquareGreenTop />
      <SquareWhiteTop />
      <Image source={Logo} />
      <ActivityIndicatorContainer>
        <ActivityIndicator size="large" color="#999" />
      </ActivityIndicatorContainer>
      <SquareWhiteBottom />
      <SquareGreenBottom />
    </Container>
  </>
);

export default Welcome;
