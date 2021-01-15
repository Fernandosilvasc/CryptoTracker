/* eslint-disable prettier/prettier */
/* eslint-disable arrow-parens */
/* eslint-disable indent */
// import { Alert } from 'react-native';
import { Reducer } from 'redux';
import produce from 'immer';

import { IWalletState } from './types';

const INITIAL_STATE: IWalletState = {
  items: [],
};
const wallet: Reducer<IWalletState> = (state = INITIAL_STATE, action) => produce(state, draft => {
    switch (action.type) {
      case 'ADD_CRYPTO_TO_WALLET': {
        const { crypto: id } = action.payload;

        // const cryptoInWalletIndex = draft.items.findIndex(
        //   item => item.id === id,
        // );

        draft.items.push({
          id,
        });

        // if (cryptoInWalletIndex === -1) {
        // } else {
        //   Alert.alert(
        //     'Sorry',
        //     'This cryptocurrency has been added to your WatchList previously.',
        //   );
        // }

        break;
      }

      case 'REMOVE_CRYPTO_TO_WALLET': {
        const { crypto: id } = action.payload;
        const cryptoInWalletIndex = draft.items.findIndex(
          item => item.id === id,
        );

        draft.items.splice(cryptoInWalletIndex, 1);
        break;
      }
      default: {
        return draft;
      }
    }
    return draft;
  });

export default wallet;
