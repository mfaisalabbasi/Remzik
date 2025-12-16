import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import SplashScreen from '../screens/Auth/SplashScreen';
import OnboardingScreen from '../screens/Auth/OnBoarding';
import SignUpScreen from '../screens/Auth/signup';
import login from '../screens/Auth/login';
import OtpVerificationScreen from '../screens/Auth/otp';
import KycScreen from '../screens/Auth/Kyc';
import KycDocs from '../screens/Auth/kycDocs';
import KycReviewScreen from '../screens/Auth/kycReview';
import docsUpload from '../screens/Auth/docsUpload';
import KycSelfieScreen from '../screens/Auth/selfie';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="OTP" component={OtpVerificationScreen} />
      <Stack.Screen name="KYC" component={KycScreen} />
      <Stack.Screen name="kycdocs" component={KycDocs} />
      <Stack.Screen name="kycreview" component={KycReviewScreen} />
      <Stack.Screen name="docsupload" component={docsUpload} />
      <Stack.Screen name="selfie" component={KycSelfieScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;