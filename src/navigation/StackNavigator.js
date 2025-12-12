// src/navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnBoarding';
import TabNavigator from './TabNavigator';

// import screens
//import PropertyDetailScreen from '../screens/Property/PropertyDetailScreen';
//import InvestScreen from '../screens/Property/InvestScreen';
//import TermsScreen from '../screens/Settings/TermsScreen';
//import NotificationsScreen from '../screens/Settings/NotificationsScreen';
//import ProfileScreen from '../screens/Settings/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Onboarding" component={OnboardingScreen} />

      {/* <Stack.Screen name="MainTabs" component={TabNavigator} /> */}
      
      {/* Bottom tabs */}
      {/* <Stack.Screen name="MainTabs" component={TabNavigator} /> */}

      {/* Other screens */}
      {/* <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
      <Stack.Screen name="Invest" component={InvestScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} /> */}

    </Stack.Navigator>
  );
}