import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioOverviewScreen from '../../screens/Portfolio/Portfolio';
import NotificationsScreen from '../../screens/Home/Notifications';
import HoldingDetailScreen from '../../screens/Portfolio/HoldingDetails';
import colors from '../../theme/colors';
import {
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import PortfolioSummaryCard from '../../components/PortfolioSummaryCard';

const Stack = createNativeStackNavigator();

const PortfolioStack = ({ navigation }) => (
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

      title: 'Portfolio Summary',
    }}
  >
    <Stack.Screen name="Portfolio" component={PortfolioOverviewScreen} />
    <Stack.Screen name="HoldingDetails" component={HoldingDetailScreen} />
    <Stack.Screen
      name="PortfolioSummaryCard"
      component={PortfolioSummaryCard}
    />
  </Stack.Navigator>
);

export default PortfolioStack;
