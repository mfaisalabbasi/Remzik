import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../../screens/Home/Notifications';
import ProfileScreen from '../../screens/MoreScreens/ProfileScreen';
import DocumentsScreen from '../../screens/MoreScreens/Documents';
import HelpCenterScreen from '../../screens/MoreScreens/Helpcenter';
import SettingsScreen from '../../screens/MoreScreens/Settings';
import MoreScreen from '../../screens/MoreScreens/More';

const Stack = createNativeStackNavigator();

const MoreStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="More" component={MoreScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Documents" component={DocumentsScreen} />
    <Stack.Screen name="Help" component={HelpCenterScreen} />
    <Stack.Screen name="Setting" component={SettingsScreen} />
  </Stack.Navigator>
);

export default MoreStack;