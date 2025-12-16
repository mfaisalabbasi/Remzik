// PortfolioCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PRIMARY_GREEN = '#0F5234';
const ACCENT_GOLD = '#B8860B';

const PortfolioCard = ({ navigation }) => {
  
  const handleInvestNow = () => {
    // Navigate to a main investment listing or guided flow
    // Example: navigation.navigate('Market', { screen: 'AllListings' });
    console.log("Navigating to Invest Flow");
  };

  const handleGoToWallet = () => {
    // Navigate to the main wallet screen (assuming it's a top-level route)
    navigation.navigate('WalletStack'); // Ensure 'WalletStack' is correct
  };

  return (
    <View style={styles.card}>
      <Text style={styles.greeting}>Assalamu Alaikum, Faisal</Text>

      <Text style={styles.valueLabel}>Total Portfolio Value</Text>
      <Text style={styles.primaryValue}>$12,450.00</Text> 

      <View style={styles.incomeRow}>
        <Text style={styles.incomeLabel}>Expected Monthly Income</Text>
        <Text style={styles.incomeValue}>$320.00</Text>
      </View>

      <View style={styles.buttonGroup}>
        {/* Invest Now Button (Accent color) */}
        <TouchableOpacity 
          style={[styles.buttonBase, styles.investButton]}
          onPress={handleInvestNow}
        >
          <Text style={styles.investText}>Invest Now</Text>
        </TouchableOpacity>
        
        {/* Go to Wallet Button (Outline style) */}
        <TouchableOpacity 
          style={[styles.buttonBase, styles.walletButton]}
          onPress={handleGoToWallet}
        >
          <Text style={styles.walletText}>Go to Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: PRIMARY_GREEN,
    padding: 20,
    margin: 20,
    borderRadius: 12,
  },
  greeting: {
    color: '#D4D4D4',
    fontSize: 14,
    marginBottom: 5,
  },
  valueLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  primaryValue: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800', // Extra bold for impact
    marginBottom: 20,
  },
  incomeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#3a7259', // Lighter green separator
  },
  incomeLabel: {
    color: '#fff',
    fontSize: 14,
  },
  incomeValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  buttonBase: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  investButton: {
    backgroundColor: ACCENT_GOLD,
    borderWidth: 1,
    borderColor: ACCENT_GOLD,
  },
  investText: {
    color: PRIMARY_GREEN,
    fontSize: 15,
    fontWeight: '700',
  },
  walletButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
  walletText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default PortfolioCard;