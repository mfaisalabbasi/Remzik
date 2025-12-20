import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../../screens/Home/Notifications';
import MarketListScreen from '../../screens/Markets/Markets';
import MarketPropertyDetailScreen from '../../screens/Markets/MarketDetail';
import colors from '../../theme/colors';
import MarketFilters from '../../components/Market/MarketFilters';
import MarketOverview from '../../components/Market/MarketOverview';
import PropertyCard from '../../components/Market/PropertyCard';
import EnterAmountScreen from '../../screens/Invest/EnterAmount';
import CalculatorScreen from '../../screens/Invest/InvestmentCalculater';
import PaymentMethodScreen from '../../screens/Invest/paymentmethod';
import SuccessScreen from '../../screens/Invest/InvestmentSuccess';
import ReviewSignScreen from '../../screens/Invest/ReviewSign';

const Stack = createNativeStackNavigator();

const MarketStack = () => (
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

      title: 'Market Overview',
    }}
  >
    <Stack.Screen name="Markets" component={MarketListScreen} />
    <Stack.Screen
      name="MarketDetails"
      component={MarketPropertyDetailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="MarketFilters" component={MarketFilters} />
    <Stack.Screen name="MarketOverview" component={MarketOverview} />
    <Stack.Screen name="PropertyCard" component={PropertyCard} />

    <Stack.Screen
      name="EnterAmount"
      component={EnterAmountScreen}
      options={{ title: 'Enter Amount' }}
    />
    <Stack.Screen name="InvestmentCalculater" component={CalculatorScreen} />
    <Stack.Screen name="InvestmentMethod" component={PaymentMethodScreen} />
    <Stack.Screen name="InvestmentSuccess" component={SuccessScreen} />
    <Stack.Screen name="ReviewSign" component={ReviewSignScreen} />
  </Stack.Navigator>
);

export default MarketStack;
