import { ICrypto } from './types';

export function addCryptoCurrencyToWallet(crypto: ICrypto) {
  return {
    type: 'ADD_CRYPTO_TO_WALLET',
    payload: {
      crypto,
    },
  };
}

export function removeCryptoCurrencyToWallet(crypto: ICrypto) {
  return {
    type: 'REMOVE_CRYPTO_TO_WALLET',
    payload: {
      crypto,
    },
  };
}
