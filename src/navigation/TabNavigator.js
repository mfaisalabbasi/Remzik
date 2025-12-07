// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomeScreen from '../screens/Home/HomeScreen';
// import MarketScreen from '../screens/Market/MarketScreen';
// import PortfolioScreen from '../screens/Portfolio/PortfolioScreen';
// import WalletScreen from '../screens/Wallet/WalletScreen';
// import MoreScreen from '../screens/Settings/MoreScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          height: 60,
          paddingBottom: 4,
          backgroundColor: colors.primary
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="pie-chart-outline" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Market"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}