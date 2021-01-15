/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
// const screenHeight = Math.round(Dimensions.get('window').height);

export const Container = styled.View`
  width: ${screenWidth}px;
  /* height: 50px; */
`;

export const BoxContent = styled.View`
  width: ${screenWidth * 0.9}px;
  background: #29283f;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid;
  border-color: #1e1b2b;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  margin: 10px auto;
  padding: 8px;
`;

export const Description = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;

export const TextSymbol = styled.Text`
  color: #bdbcc4;
`;

export const PriceArea = styled.View`
  align-items: flex-end;
  margin-right: 10px;
`;

export const TextPrice = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
`;

interface TextProps {
  isNegative: boolean;
}

export const TextPriceLast24hrs = styled.Text<TextProps>`
  color: #00bd9a;
  font-size: 12px;

  ${(props: { isNegative: boolean }) =>
    props.isNegative &&
    css`
      color: #ff6960;
    `}
`;

export const PriceLast24hrsArea = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 9px;
  font-weight: bold;
`;
