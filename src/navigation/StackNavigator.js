// src/navigation/StackNavigator.js
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './MainTabNav';
import AuthStack from './AuthStack';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const isLoggedIn = true;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     {isLoggedIn ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}