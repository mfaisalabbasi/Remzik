import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../../screens/Home/Notifications';
import EnterAmountScreen from '../../screens/Invest/EnterAmount';
import CalculatorScreen from '../../screens/Invest/InvestmentCalculater';
import PaymentMethodScreen from '../../screens/Invest/paymentmethod';
import SuccessScreen from '../../screens/Invest/InvestmentSuccess';
import ReviewSignScreen from '../../screens/Invest/ReviewSign';

const Stack = createNativeStackNavigator();

const InvestStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="EnterAmount" component={EnterAmountScreen} />
    <Stack.Screen name="InvestmentCalculater" component={CalculatorScreen} />
    <Stack.Screen name="InvestmentMethod" component={PaymentMethodScreen} />
    <Stack.Screen name="InvestmentSuccess" component={SuccessScreen} />
    <Stack.Screen name="ReviewSign" component={ReviewSignScreen} />
  </Stack.Navigator>
);

export default InvestStack;