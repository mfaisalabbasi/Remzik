import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../../screens/Home/Notifications';
import ProfileScreen from '../../screens/MoreScreens/ProfileScreen';
import DocumentsScreen from '../../screens/MoreScreens/Documents';
import HelpCenterScreen from '../../screens/MoreScreens/Helpcenter';
import SettingsScreen from '../../screens/MoreScreens/Settings';
import MoreScreen from '../../screens/MoreScreens/More';
import colors from '../../theme/colors';
import TransactionHistoryScreen from '../../screens/Wallet/TransactionHistory';
import TransactionsHistory from '../../screens/MoreScreens/TransactionsHistory';
import PaymentMethodsScreen from '../../screens/MoreScreens/PaymentMethod';
import LogoutModal from '../../screens/MoreScreens/Logout';

const Stack = createNativeStackNavigator();

const MoreStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: '#ffffff',

      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTitleStyle: {
        fontSize: 25,
        color: colors.lightGray,
        fontWeight: '300',
      },
      headerBackVisible: false,
      headerShadowVisible: false,

      title: 'Settings',
    }}
  >
    <Stack.Screen name="More" component={MoreScreen} />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: 'Profile Settings' }}
    />
    <Stack.Screen
      name="Documents"
      component={DocumentsScreen}
      options={{ title: 'Documents' }}
    />
    <Stack.Screen
      name="Help"
      component={HelpCenterScreen}
      options={{ title: 'Help & Support' }}
    />
    <Stack.Screen
      name="Setting"
      component={SettingsScreen}
      options={{ title: 'Settings' }}
    />
    <Stack.Screen
      name="TransactionHistory"
      component={TransactionsHistory}
      options={{ title: 'Transactions History' }}
    />
    <Stack.Screen
      name="PaymentMethod"
      component={PaymentMethodsScreen}
      options={{ title: 'Payments Method' }}
    />
    <Stack.Screen
      name="Logout"
      component={LogoutModal}
      options={{ title: 'Payments Method' }}
    />
  </Stack.Navigator>
);

export default MoreStack;
