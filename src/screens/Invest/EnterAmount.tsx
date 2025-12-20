import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EnterAmount = ({ navigation }: any) => {
  const [amount, setAmount] = useState('');

  const handleNext = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    navigation.navigate('SelectPaymentMethod', { amount: parseFloat(amount) });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableOpacity
        style={styles.backarrow}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Enter Investment Amount</Text>
        <Text style={styles.subtitle}>
          Enter the amount you want to invest in this property/asset.
        </Text>

        {/* Amount Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.currency}>SAR</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="0.00"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        {/* Suggested Quick Amounts */}
        <View style={styles.quickAmounts}>
          {['500', '1000', '5000'].map(amt => (
            <TouchableOpacity
              key={amt}
              style={styles.quickButton}
              onPress={() => setAmount(amt)}
            >
              <Text style={styles.quickText}>SAR {amt}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('InvestmentCalculater')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EnterAmount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backarrow: { marginLeft: 15, marginVertical: 15 },

  innerContainer: {
    padding: 25,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
  },
  currency: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
    color: '#333',
  },
  input: {
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    color: '#333',
  },
  quickAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  quickButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  quickText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
