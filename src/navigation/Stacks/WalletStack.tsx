import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../../screens/Home/Notifications';
import WalletOverviewScreen from '../../screens/Wallet/Wallet';
import DepositScreen from '../../screens/Wallet/Deposit';
import WithdrawScreen from '../../screens/Wallet/Withdraw';
import TransactionHistoryScreen from '../../screens/Wallet/TransactionHistory';

const Stack = createNativeStackNavigator();

const WalletStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Wallet" component={WalletOverviewScreen} />
    <Stack.Screen name="Deposit" component={DepositScreen} />
    <Stack.Screen name="Withdraw" component={WithdrawScreen} />
    <Stack.Screen name="Transaction" component={TransactionHistoryScreen} />
  </Stack.Navigator>
);

export default WalletStack;