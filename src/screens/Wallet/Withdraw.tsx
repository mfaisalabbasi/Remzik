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

export default function WithdrawScreen() {
  const navigation = useNavigation();

  const AVAILABLE_BALANCE = 4200; // later from API
  const [amount, setAmount] = useState('');

  const numericAmount = Number(amount);
  const isValid = numericAmount > 0 && numericAmount <= AVAILABLE_BALANCE;

  const handleWithdraw = () => {
    // 1️⃣ Call withdraw API
    // 2️⃣ Lock button / show loader
    // 3️⃣ On success → Wallet

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
      <Text style={styles.title}>Withdraw Funds</Text>
      <Text style={styles.subtitle}>
        Withdraw only available balance to your linked account
      </Text>

      {/* Available Balance */}
      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceValue}>
          ${AVAILABLE_BALANCE.toLocaleString()}
        </Text>
      </View>

      {/* Amount Input */}
      <Text style={styles.sectionLabel}>Withdraw Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Enter amount"
        style={styles.input}
      />

      {!isValid && amount.length > 0 && (
        <Text style={styles.errorText}>
          Enter amount within available balance
        </Text>
      )}

      {/* Destination */}
      <View style={styles.methodBox}>
        <Text style={styles.methodText}>Withdraw To</Text>
        <Text style={styles.methodValue}>Linked Bank Account</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={[styles.button, !isValid && { opacity: 0.5 }]}
        disabled={!isValid}
        onPress={handleWithdraw}
      >
        <Text style={styles.buttonText}>Confirm Withdraw</Text>
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
    color: '#0E5E4E',
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
    marginBottom: 6,
  },

  errorText: {
    color: '#DC2626',
    fontSize: 12,
    marginBottom: 16,
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
