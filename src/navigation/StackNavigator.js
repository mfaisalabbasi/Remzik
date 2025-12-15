// src/navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnBoarding';
import TabNavigator from './TabNavigator';
import signup from '../screens/Auth/signup';
import login from '../screens/Auth/login';
import OtpVerificationScreen from '../screens/Auth/otp';
import KycScreen from '../screens/Auth/Kyc';
import KycDocs from '../screens/Auth/kycDocs';
import docsUpload from '../screens/Auth/docsUpload';
import KycSelfieScreen from '../screens/Auth/selfie';
import KycReviewScreen from '../screens/Auth/kycReview';
import NotificationsScreen from '../screens/Home/Notifications';
import PropertyDetailScreen from '../screens/property/propertyDetail';
import PortfolioOverviewScreen from '../screens/Portfolio/Portfolio';
import HoldingDetailScreen from '../screens/Portfolio/HoldingDetails';
import MarketListScreen from '../screens/Markets/Markets';
import MarketPropertyDetailScreen from '../screens/Markets/MarketDetail';
import EnterAmountScreen from '../screens/Invest/EnterAmount';
import WalletOverviewScreen from '../screens/Wallet/Wallet';
import DepositScreen from '../screens/Wallet/Deposit';
import TransactionHistoryScreen from '../screens/Wallet/TransactionHistory';
import WithdrawScreen from '../screens/Wallet/Withdraw';
import MoreScreen from '../screens/MoreScreens/More';
import ProfileScreen from '../screens/MoreScreens/ProfileScreen';
import DocumentsScreen from '../screens/MoreScreens/Documents';
import HelpCenterScreen from '../screens/MoreScreens/Helpcenter';
import SettingsScreen from '../screens/MoreScreens/Settings';
import ErrorScreen from '../screens/Utility/Error';
import NoInternetScreen from '../screens/Utility/NoInternet';
import MaintenanceScreen from '../screens/Utility/Maintenance';
import LegalScreen from '../screens/Utility/Legal';
import CalculatorScreen from '../screens/Invest/InvestmentCalculater';
import ReviewSignScreen from '../screens/Invest/ReviewSign';
import PaymentMethodScreen from '../screens/Invest/paymentmethod';
import SuccessScreen from '../screens/Invest/InvestmentSuccess';
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

      {/* <Stack.Screen name="investmentsuccess" component={SuccessScreen} />  */}

      {/* <Stack.Screen name="paymentmethod" component={PaymentMethodScreen} />  */}

      {/* <Stack.Screen name="reviewsign" component={ReviewSignScreen} />  */}

      {/* <Stack.Screen name="calculater" component={CalculatorScreen} />  */}

      
      {/* <Stack.Screen name="legal" component={LegalScreen} />  */}

      {/* <Stack.Screen name="maintenance" component={MaintenanceScreen} />  */}

      {/* <Stack.Screen name="nointernet" component={NoInternetScreen} />  */}

      {/* <Stack.Screen name="error" component={ErrorScreen} />  */}

      {/* <Stack.Screen name="settings" component={SettingsScreen} />  */}

      {/* <Stack.Screen name="helpcenter" component={HelpCenterScreen} />  */}

      {/* <Stack.Screen name="documents" component={DocumentsScreen} />  */}

      {/* <Stack.Screen name="profile" component={ProfileScreen} />  */}

      {/* <Stack.Screen name="more" component={MoreScreen} /> */}

      {/* <Stack.Screen name="withdraw" component={WithdrawScreen} /> */}

      {/* <Stack.Screen name="transactions" component={TransactionHistoryScreen} /> */}

      {/* <Stack.Screen name="deposit" component={DepositScreen} /> */}

      {/* <Stack.Screen name="wallet" component={WalletOverviewScreen} /> */}

      {/* <Stack.Screen name="enteramount" component={EnterAmountScreen} /> */}

      {/* <Stack.Screen name="marketdetail" component={MarketPropertyDetailScreen} /> */}

      {/* <Stack.Screen name="markets" component={MarketListScreen} /> */}

      {/* <Stack.Screen name="holding" component={HoldingDetailScreen} /> */}

      {/* <Stack.Screen name="portfolio" component={PortfolioOverviewScreen} /> */}


      {/* <Stack.Screen name="propertydetail" component={PropertyDetailScreen} /> */}


      {/* <Stack.Screen name="notifications" component={NotificationsScreen} /> */}

        {/* <Stack.Screen name="kycreview" component={KycReviewScreen} /> */}

        {/* <Stack.Screen name="kycselfie" component={KycSelfieScreen} /> */}

        {/* <Stack.Screen name="docsupload" component={docsUpload} /> */}

        {/* <Stack.Screen name="kycdocs" component={KycDocs} /> */}

        {/* <Stack.Screen name="kyc" component={KycScreen} /> */}

        {/* <Stack.Screen name="otp" component={OtpVerificationScreen} /> */}
       {/* <Stack.Screen name="login" component={login} /> */}

       {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      {/* <Stack.Screen name="MainTabs" component={TabNavigator} />  */}
      {/* Bottom tabs */}
      <Stack.Screen name="MainTabs" component={TabNavigator} />

      {/* Other screens */}
      {/* <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
      <Stack.Screen name="Invest" component={InvestScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} /> */}

    </Stack.Navigator>
  );
}