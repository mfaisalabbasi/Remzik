import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

export default function DepositScreen() {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');

  const isValid = Number(amount) > 0;

  const handleDeposit = () => {
    // 1️⃣ Call API / blockchain later
    // 2️⃣ Show success feedback
    // 3️⃣ Navigate back to Wallet

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backarrow}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={22} color={colors.primary} />
      </TouchableOpacity>
      {/* Header */}
      <Text style={styles.title}>Deposit Funds</Text>
      <Text style={styles.subtitle}>
        Add funds to your Shariah-compliant wallet
      </Text>

      {/* Balance */}
      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceValue}>$4,200</Text>
      </View>

      {/* Amount Input */}
      <Text style={styles.sectionLabel}>Deposit Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Enter amount"
        style={styles.input}
      />

      {/* Payment Method (Placeholder) */}
      <View style={styles.methodBox}>
        <Text style={styles.methodText}>Payment Method</Text>
        <Text style={styles.methodValue}>Bank Transfer</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={[styles.button, !isValid && { opacity: 0.5 }]}
        disabled={!isValid}
        onPress={handleDeposit}
      >
        <Text style={styles.buttonText}>Confirm Deposit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },

  backarrow: { marginLeft: 0, marginVertical: 10 },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 20,
  },

  balanceBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 1,
  },
  balanceLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  balanceValue: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 4,
  },

  sectionLabel: {
    fontSize: 13,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },

  methodBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  methodText: {
    fontSize: 12,
    color: '#6B7280',
  },
  methodValue: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },

  button: {
    height: 52,
    backgroundColor: '#0E5E4E',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
