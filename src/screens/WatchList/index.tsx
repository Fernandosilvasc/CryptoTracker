/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable arrow-parens */
/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

import {
  ICryptoCurrencyDataBase, ICrypto, IWalletItem, IState,
} from '../../types';

import api from '../../services/api';

import CryptoCurrency from '../../components/CryptoCurrency';
import cryptoSgvIllustration from '../../assets/cryptoIllustration2.png';
import warnIllustration from '../../assets/warnIllustration.png';

import {
  Container, TextTitle, ImgContainer, Image, Header, WarningArea, WarnBox, TextWarn, ActivityIndicatorContainer,
} from './styles';

const WatchList: React.FC = () => {
  const wallet = useSelector<IState, IWalletItem[]>((state) => state.wallet.items);
  const [editButtonStatus, setEditButtonStatus] = useState(false);
  const [cryptoCurrenciesFromDB, setCryptoCurrenciesFromDB] = useState<ICrypto[]>([]);
  const [cryptoCurrenciesFromWallet, setCryptoCurrenciesFromWallet] = useState<string>();
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setLoading] = useState(true);

  const wait = (timeout: number) => new Promise(resolve => { setTimeout(resolve, timeout); });

  const handleEditWatchList = useCallback(() => {
    setEditButtonStatus(!editButtonStatus);
  }, [editButtonStatus]);

  const loadData = useCallback(async () => {
    if (cryptoCurrenciesFromWallet) {
      const { data } = await api.get(
        `v3/coins/markets?vs_currency=usd&ids=${cryptoCurrenciesFromWallet}&order=market_cap_desc`,
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

      setCryptoCurrenciesFromDB(cryptoCurrenciesDB);
      setLoading(false);
    }
  }, [cryptoCurrenciesFromWallet]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadData();
    wait(1500).then(() => setRefreshing(false));
  }, [loadData]);

  useEffect(() => {
    const cryptosFromWallet = wallet.map(value => value.id).join('%2C');
    setCryptoCurrenciesFromWallet(cryptosFromWallet);
  }, [wallet]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Container>
      <Header>
        <TextTitle>WatchList</TextTitle>
        {editButtonStatus === true ? (
          <Button icon="border-color" mode="contained" color="#ff6960" onPress={() => handleEditWatchList()}>
            Save
          </Button>
        ) : (
          <Button icon="border-color" mode="contained" color="#00bd9a" onPress={() => handleEditWatchList()}>
            Edit
          </Button>

        )}
      </Header>

      {!cryptoCurrenciesFromWallet ? (
        <WarningArea>
          <Image source={warnIllustration} />
          <WarnBox>
            <TextWarn>
              Looks like you did not add any crypto to the watchlist.
            </TextWarn>
          </WarnBox>
        </WarningArea>
      ) : (
        <>
          <ImgContainer>
            <Image source={cryptoSgvIllustration} />
          </ImgContainer>

          {!isLoading ? (
            <>
              {editButtonStatus === true ? (
                <FlatList
                  refreshControl={
                    <RefreshControl tintColor="white" refreshing={refreshing} onRefresh={onRefresh} />
            }
                  data={cryptoCurrenciesFromDB}
                  renderItem={({ item }) => (
                    <CryptoCurrency crypto={item} buttonRequired buttonTypeAdd={false} buttonTypeRemove buttonText="remove" />
                  )}
                />
              ) : (
                <FlatList
                  refreshControl={
                    <RefreshControl tintColor="white" refreshing={refreshing} onRefresh={onRefresh} />
            }
                  data={cryptoCurrenciesFromDB}
                  renderItem={({ item }) => (
                    <CryptoCurrency crypto={item} buttonRequired={false} buttonTypeAdd={false} buttonTypeRemove={false} buttonText="remove" />
                  )}
                />
              )}
            </>
          ) : (
            <ActivityIndicatorContainer>
              <ActivityIndicator size="large" color="#999" />
            </ActivityIndicatorContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default WatchList;
