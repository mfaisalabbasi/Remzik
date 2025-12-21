// PortfolioCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const PRIMARY_GREEN = '#0F5234';
const ACCENT_GOLD = '#B8860B';

const PortfolioCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      {/* <Text style={styles.greeting}>Hi, Faisal</Text> */}

      <Text style={styles.valueLabel}>Portfolio Value</Text>
      <Text style={styles.primaryValue}>$12,450.00</Text>

      <View style={styles.incomeRow}>
        <Text style={styles.incomeLabel}>Expected Monthly Income</Text>
        <Text style={styles.incomeValue}>$320.00</Text>
      </View>

      <View style={styles.buttonGroup}>
        {/* Invest Now Button (Accent color) */}
        <TouchableOpacity
          style={[styles.buttonBase, styles.investButton]}
          onPress={() => navigation.navigate('Market', { screen: 'Markets' })}
        >
          <Text style={styles.investText}>Invest Now</Text>
        </TouchableOpacity>

        {/* Go to Wallet Button (Outline style) */}
        <TouchableOpacity
          style={[styles.buttonBase, styles.walletButton]}
          onPress={() => navigation.navigate('Wallet', { screen: 'Wallet' })}
        >
          <Text style={styles.walletText}>Go to Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    padding: 15,
    paddingTop: 0,
    marginBottom: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  greeting: {
    color: '#D4D4D4',
    fontSize: 14,
  },
  valueLabel: {
    color: '#D4D4D4',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 10,
  },
  primaryValue: {
    color: '#A7F3D0',
    fontSize: 20,
    fontWeight: '600', // Extra bold for impact
    marginBottom: 10,
  },
  incomeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    borderTopWidth: 1,
    borderTopColor: '#3a7259', // Lighter green separator
  },
  incomeLabel: {
    color: '#D4D4D4',
    fontSize: 12,
  },
  incomeValue: {
    color: '#A7F3D0',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonBase: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  investButton: {
    backgroundColor: colors.accent,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  investText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  walletButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#fff',
  },
  walletText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default PortfolioCard;
