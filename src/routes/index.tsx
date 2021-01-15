import React, { useState, useEffect } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Welcome from '../screens/Welcome';
import Market from '../screens/Market';
import WatchList from '../screens/WatchList';
import SearchCrypto from '../screens/SearchCrypto';

const App = createMaterialBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Welcome />
      ) : (
        <App.Navigator
          initialRouteName="Market"
          activeColor="#00bd9a"
          inactiveColor="#585272"
          barStyle={{ height: 55, backgroundColor: '#1E1B2B' }}
        >
          <App.Screen
            name="market"
            component={Market}
            options={{
              tabBarLabel: 'Market',
              tabBarIcon: ({ color }) => (
                <Icon name="trending-up" color={color} size={20} />
              ),
            }}
          />

          <App.Screen
            name="searchCrypto"
            component={SearchCrypto}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color }) => (
                <Icon name="search" color={color} size={20} />
              ),
            }}
          />

          <App.Screen
            name="watchList"
            component={WatchList}
            options={{
              tabBarLabel: 'WatchList',
              tabBarIcon: ({ color }) => (
                <Icon name="star" color={color} size={20} />
              ),
            }}
          />
        </App.Navigator>
      )}
    </>
  );
};

export default AppRoutes;
