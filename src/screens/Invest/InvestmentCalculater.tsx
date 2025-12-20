import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import colors from '../../theme/colors';
import Slider from '@react-native-community/slider';

const InvestmentCalculatorScreen = ({ navigation, route }: any) => {
  const initialAmount = route.params?.amount || 0;

  const [amount, setAmount] = useState(initialAmount.toString());
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [interestRate, setInterestRate] = useState(8); // example % return per year
  const [duration, setDuration] = useState(12); // in months

  const calculateReturn = () => {
    const principal = parseFloat(amount);
    if (isNaN(principal) || principal <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    const monthlyReturn = (principal * interestRate) / 100 / 12;
    setExpectedReturn(monthlyReturn * duration);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Investment Calculator</Text>
      <Text style={styles.subtitle}>
        Estimate your returns based on investment amount, duration, and expected
        interest.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.currency}>SAR</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholder="0.00"
        />
      </View>

      <Text style={styles.label}>Expected Annual Return (%)</Text>
      <View style={styles.sliderContainer}>
        <Text>{interestRate}%</Text>
        <Slider
          style={{ flex: 1, marginLeft: 10 }}
          minimumValue={1}
          maximumValue={20}
          step={1}
          value={interestRate}
          onValueChange={setInterestRate}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor="#ddd"
        />
      </View>

      <Text style={styles.label}>Investment Duration (Months)</Text>
      <View style={styles.sliderContainer}>
        <Text>{duration}</Text>
        <Slider
          style={{ flex: 1, marginLeft: 10 }}
          minimumValue={1}
          maximumValue={60}
          step={1}
          value={duration}
          onValueChange={setDuration}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor="#ddd"
        />
      </View>

      <TouchableOpacity
        style={styles.calculateButton}
        onPress={calculateReturn}
      >
        <Text style={styles.calculateText}>Calculate</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Expected Returns:</Text>
        <Text style={styles.resultValue}>SAR {expectedReturn.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() =>
          navigation.navigate('InvestmentMethod', {
            amount: parseFloat(amount),
          })
        }
      >
        <Text style={styles.nextText}>Proceed to Invest</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvestmentCalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    alignItems: 'center',
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
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  calculateButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 25,
  },
  calculateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  resultContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
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
