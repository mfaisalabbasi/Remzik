import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../../screens/Home/Notifications';
import MarketListScreen from '../../screens/Markets/Markets';
import MarketPropertyDetailScreen from '../../screens/Markets/MarketDetail';

const Stack = createNativeStackNavigator();

const MarketStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Markets" component={MarketListScreen} />
    <Stack.Screen name="MarketDetails" component={MarketPropertyDetailScreen} />
  </Stack.Navigator>
);

export default MarketStack;