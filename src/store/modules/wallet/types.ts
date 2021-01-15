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
  // crypto: ICrypto;
}

export interface IWalletState {
  items: IWalletItem[];
}
