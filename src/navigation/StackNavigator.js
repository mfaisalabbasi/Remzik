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
        {/* <Stack.Screen name="kycreview" component={KycReviewScreen} /> */}

        {/* <Stack.Screen name="kycselfie" component={KycSelfieScreen} /> */}

        {/* <Stack.Screen name="docsupload" component={docsUpload} /> */}

        {/* <Stack.Screen name="kycdocs" component={KycDocs} /> */}

        <Stack.Screen name="kyc" component={KycScreen} />

        {/* <Stack.Screen name="otp" component={OtpVerificationScreen} /> */}
       {/* <Stack.Screen name="login" component={login} /> */}

       {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      {/* <Stack.Screen name="MainTabs" component={TabNavigator} /> */} 
      {/* Bottom tabs */}
      {/* <Stack.Screen name="MainTabs" component={TabNavigator} /> */}

      {/* Other screens */}
      {/* <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
      <Stack.Screen name="Invest" component={InvestScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} /> */}

    </Stack.Navigator>
  );
}