export interface ICryptoCurrencyDataBase {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export interface ICrypto {
  id: string;
  name: string;
  image: string;
  symbol: string;
  price: number;
  priceLast24hrs: number;
}

export interface IWalletItem {
  id: string;
}

export interface IWalletState {
  items: IWalletItem[];
}

export interface IState {
  wallet: IWalletState;
}

export interface CryptoCurrencyComponentProps {
  crypto: ICrypto;
  buttonRequired: boolean;
  buttonTypeAdd: boolean;
  buttonTypeRemove: boolean;
  buttonText: string;
}
