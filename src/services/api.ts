import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://data.messari.io/api',
  baseURL: 'https://api.coingecko.com/api',
});

export default api;
