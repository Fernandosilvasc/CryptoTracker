/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, FlatList,
} from 'react-native';

import { ICrypto, ICryptoCurrencyDataBase } from '../../types';

import api from '../../services/api';

import {
  Container, InputContainer, InputArea, Title, TextInput,
} from './styles';
import CryptoCurrency from '../../components/CryptoCurrency';

const SearchCrypto: React.FC = ({ navigation }: any) => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState<ICrypto[]>([]);
  const [currenciesFiltered, setCurrenciesFiltered] = useState<ICrypto[]>([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isLoading, setLoading] = useState(true);

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

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      setCryptoCurrencies([]);
      loadData();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const cryptoCurrenciesFilteredByName = cryptoCurrencies.filter(crypto => (crypto.name.toLowerCase().includes(searchInputValue.toLowerCase())));

    const cryptoCurrenciesFilteredBySymbol = cryptoCurrencies.filter(crypto => (crypto.symbol.toLowerCase().includes(searchInputValue.toLowerCase())));

    const cryptoCurrenciesFiltered = [...new Set([...cryptoCurrenciesFilteredBySymbol, ...cryptoCurrenciesFilteredByName])];

    setCurrenciesFiltered(cryptoCurrenciesFiltered);
  }, [cryptoCurrencies, searchInputValue]);

  return (
    <>
      <InputContainer>
        <Title>Search a Cryptocurrency</Title>
        <InputArea>
          <TextInput
            placeholder="Use a name or ticker symbol .."
            placeholderTextColor="#999"
            onChangeText={text => setSearchInputValue(text)}
            autoCapitalize="none"
          />
        </InputArea>
      </InputContainer>
      {!isLoading ? (
        <Container>
          <FlatList
            data={currenciesFiltered}
            renderItem={({ item }) => <CryptoCurrency crypto={item} buttonTypeAdd buttonRequired buttonTypeRemove={false} buttonText="add" />}
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

export default SearchCrypto;
