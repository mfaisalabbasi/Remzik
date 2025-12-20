import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../../screens/Home/Notifications';
import WalletOverviewScreen from '../../screens/Wallet/Wallet';
import DepositScreen from '../../screens/Wallet/Deposit';
import WithdrawScreen from '../../screens/Wallet/Withdraw';
import TransactionHistoryScreen from '../../screens/Wallet/TransactionHistory';
import colors from '../../theme/colors';

const Stack = createNativeStackNavigator();

const WalletStack = () => (
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

      title: 'Remzik Wallet',
    }}
  >
    <Stack.Screen name="Wallet" component={WalletOverviewScreen} />
    <Stack.Screen
      name="Deposit"
      component={DepositScreen}
      options={{ title: 'Deposit Section' }}
    />
    <Stack.Screen
      name="Withdraw"
      component={WithdrawScreen}
      options={{ title: 'Withdraw Section' }}
    />
    <Stack.Screen name="Transaction" component={TransactionHistoryScreen} />
  </Stack.Navigator>
);

export default WalletStack;
