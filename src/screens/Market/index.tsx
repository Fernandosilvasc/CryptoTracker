/* eslint-disable block-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-parens */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import {
  FlatList, ActivityIndicator, RefreshControl,
} from 'react-native';

import api from '../../services/api';
import { ICryptoCurrencyDataBase, ICrypto } from '../../types';

import CryptoCurrency from '../../components/CryptoCurrency';
import cryptoIllustration from '../../assets/cryptoImg.png';

import {
  Container, ImgContainer, Image, TextTitle,
} from './styles';

const Market: React.FC = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState<ICrypto[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout: number) => new Promise(resolve => {setTimeout(resolve, timeout);});

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadData();
    wait(1500).then(() => setRefreshing(false));
  }, []);

  const loadData = async () => {
    const { data } = await api.get(
      'v3/coins/markets?vs_currency=usd&order=market_cap_desc',
    );

    const cryptoCurrenciesDB = data.map((crypto: ICryptoCurrencyDataBase) => {
      const {
        id,
        name,
        image,
        symbol,
        current_price,
        price_change_percentage_24h,
      } = crypto;

      const priceLast24hrs = price_change_percentage_24h && price_change_percentage_24h.toFixed(2);
      const price = current_price && current_price.toFixed(2);

      return {
        id,
        name,
        image,
        symbol,
        price,
        priceLast24hrs,
      };
    });

    setCryptoCurrencies(cryptoCurrenciesDB);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Container>
        <TextTitle>Market Trading</TextTitle>
        <ImgContainer>
          <Image source={cryptoIllustration} />
        </ImgContainer>
      </Container>
      {!isLoading ? (
        <Container>
          <FlatList
            refreshControl={
              <RefreshControl tintColor="white" refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={cryptoCurrencies}
            renderItem={({ item }) => (
              <CryptoCurrency
                buttonRequired={false}
                buttonTypeAdd={false}
                buttonTypeRemove={false}
                buttonText=""
                crypto={item}
              />
            )}
          />
        </Container>
      ) : (
        <Container>
          <ActivityIndicator size="large" color="#999" />
        </Container>
      )}
    </>
  );
};

export default Market;
