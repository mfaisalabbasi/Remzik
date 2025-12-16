import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioOverviewScreen from '../../screens/Portfolio/Portfolio';
import NotificationsScreen from '../../screens/Home/Notifications';
import HoldingDetailScreen from '../../screens/Portfolio/HoldingDetails';

const Stack = createNativeStackNavigator();

const PortfolioStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Portfolio" component={PortfolioOverviewScreen} />
    <Stack.Screen name="HoldingDetails" component={HoldingDetailScreen} />
  </Stack.Navigator>
);

export default PortfolioStack;