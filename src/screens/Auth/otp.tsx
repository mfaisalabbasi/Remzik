import React, { useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,
    SafeAreaView, StatusBar,Platform
} from 'react-native'
import colors from '../../theme/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

const OtpVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputsRef = useRef([])

  const handleChange = (value, index) => {
    const updatedOtp = [...otp]
    updatedOtp[index] = value
    setOtp(updatedOtp)

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (key, index) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handleVerifyOtp = () => {
    const finalOtp = otp.join('')
    console.log('Entered OTP:', finalOtp)
    // TODO: API verification
    // navigation.replace('Home')
  }

  return (
    <View style={{flex:1}}>
     
     <SafeAreaView
                        edges={['top']}
                        style={{ backgroundColor: colors.primary , paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0}}
                      >
                        <StatusBar
                          barStyle="light-content"
                          translucent={false}
                          backgroundColor="#0F5F3A"
                        />
                      </SafeAreaView>
                      <Header
        title="Remzik"
        onProfilePress={() => navigation.navigate('Profile')}
        onNotifPress={() => navigation.navigate('Notifications')}
        left={
          <TouchableOpacity onPress={() => navigation.toggleDrawer?.()}>
            <Ionicons name="menu-outline" size={26} color={colors.card} />
          </TouchableOpacity>
        }
      />
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to your number</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  </View>)
}

export default OtpVerificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  verifyButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  resendButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  resendText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.primary,
  },
})