/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, Image } from 'react-native';

import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';

import { IState, IWalletItem, ICrypto, CryptoCurrencyComponentProps } from '../../types';

import {
  addCryptoCurrencyToWallet,
  removeCryptoCurrencyToWallet,
} from '../../store/modules/wallet/actions';

import { Container, BoxContent, Description, TextName, TextSymbol, TextPrice, TextPriceLast24hrs, PriceArea, TextButton, PriceLast24hrsArea } from './styles';

const CryptoCurrency: React.FC<CryptoCurrencyComponentProps> = ({
  crypto,
  buttonRequired,
  buttonTypeAdd,
  buttonTypeRemove,
  buttonText,
}: CryptoCurrencyComponentProps) => {
  const dispatch = useDispatch();
  const { id, name, image, symbol, price, priceLast24hrs } = crypto;
  const [buttonPressed, setButtonPressed] = useState(false);

  const wallet = useSelector<IState, IWalletItem[]>((state) => state.wallet.items);

  const cryptoFromWallet = wallet.map((cryptoCurrency) => {
    const { id: cryptoID } = cryptoCurrency;
    return cryptoID;
  });

  const handleAddCryptoToWallet = useCallback(
    (cryptoCurrencyID) => {
      dispatch(addCryptoCurrencyToWallet(cryptoCurrencyID));
    },
    [dispatch],
  );

  const handleRemoveCryptoToWallet = useCallback(
    (cryptoCurrencyID) => {
      dispatch(removeCryptoCurrencyToWallet(cryptoCurrencyID));
    },
    [dispatch],
  );

  useEffect(() => {
    const checkCrypto = cryptoFromWallet.includes(id);

    if (checkCrypto) {
      setButtonPressed(true);
    }
  }, [cryptoFromWallet, id]);

  return (
    <Container>
      <BoxContent>
        <Description>
          <Image
            source={{ uri: image }}
            style={{ width: 40, height: 40, margin: 10 }}
          />
          <View>
            <TextName>{name}</TextName>
            <TextSymbol>{symbol}</TextSymbol>
          </View>
        </Description>

        {buttonRequired === true ? (
          <>
            {buttonPressed === true ? (
              (buttonTypeAdd && (
                <Icon name="check-circle" color="#00BD9A" size={40} style={{ marginRight: 15 }} />
              ))
            ) : (
              (buttonTypeAdd && (
              <Button
                compact
                mode="contained"
                onPress={() => handleAddCryptoToWallet(id)}
                style={{ backgroundColor: '#34A9FF', marginRight: 15 }}
              >
                <TextButton>
                  {buttonText}
                </TextButton>
              </Button>
              ))
            )}

            {buttonTypeRemove && (
            <Button
              compact
              mode="contained"
              onPress={() => handleRemoveCryptoToWallet(id)}
              style={{ backgroundColor: '#FF6960', marginRight: 15 }}
            >
              <TextButton>
                {buttonText}
              </TextButton>
            </Button>
            )}
          </>
        ) : (
          <PriceArea>
            <TextPrice>${price}</TextPrice>
            {priceLast24hrs >= 0 ? (
              <PriceLast24hrsArea>
                <IconFeather name="trending-up" color="#00BD9A" size={16} style={{ marginRight: 8 }} />
                <TextPriceLast24hrs isNegative={false}>{priceLast24hrs}%</TextPriceLast24hrs>
              </PriceLast24hrsArea>
            ) : (
              <PriceLast24hrsArea>
                <IconFeather name="trending-down" color="#ff6960" size={16} style={{ marginRight: 8 }} />
                <TextPriceLast24hrs isNegative>{priceLast24hrs}%</TextPriceLast24hrs>
              </PriceLast24hrsArea>
            )}
          </PriceArea>
        )}
      </BoxContent>
    </Container>
  );
};

export default CryptoCurrency;
