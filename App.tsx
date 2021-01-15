import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import Routes from './src/routes';

import store from './src/store';

const persistedStore = persistStore(store);

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#1E1B2B" />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1B2B' }}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <Routes />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
