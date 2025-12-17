import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioOverviewScreen from '../../screens/Portfolio/Portfolio';
import NotificationsScreen from '../../screens/Home/Notifications';
import HoldingDetailScreen from '../../screens/Portfolio/HoldingDetails';
import colors from '../../theme/colors';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import PortfolioSummaryCard from '../../components/PortfolioSummaryCard';


const Stack = createNativeStackNavigator();

const PortfolioStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: true, headerTintColor:'#ffffff',
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerStyle:{
            backgroundColor:colors.primary,
          }, 

        
          
          }}>
    <Stack.Screen name="Portfolio" component={PortfolioOverviewScreen} />
    <Stack.Screen name="HoldingDetails" component={HoldingDetailScreen} />
    <Stack.Screen name="PortfolioSummaryCard" component={PortfolioSummaryCard} />

  </Stack.Navigator>
);

export default PortfolioStack;