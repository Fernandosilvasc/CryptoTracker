import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import rootReducer from './modules/root.Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['wallet'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));
export default store;
