// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Stacks/HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';
import PortfolioStack from './Stacks/PortfolioStack';
import MarketStack from './Stacks/MarketStack';
import WalletStack from './Stacks/WalletStack';
import MoreStack from './Stacks/MoreStack';

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
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={PortfolioStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="pie-chart-outline" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Market"
        component={MarketStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}