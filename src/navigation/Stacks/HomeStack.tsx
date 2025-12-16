import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import NotificationsScreen from '../../screens/Home/Notifications';
import PropertyDetailScreen from '../../screens/property/propertyDetail';
import Header from '../../components/Header';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Header" component={Header} />

  </Stack.Navigator>
);

export default HomeStack;