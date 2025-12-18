// PortfolioSummaryCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// NOTE: For the Pie Chart visual, you would need a library like 'react-native-svg' and 'react-native-chart-kit'.
// We are using a simple placeholder for the visual area here.

const PRIMARY_GREEN = '#0F5234';
const ACCENT_GREEN = '#4CAF50';
const ACCENT_GOLD = '#B8860B';
const LIGHT_GREY = '#F5F5F5';

const PieChartPlaceholder = () => (
  <View style={styles.pieChartPlaceholder}>
    <Text style={{ fontSize: 8 }}>Chart</Text>
  </View>
);

const PortfolioSummaryCard = () => {
  const isPositive = " data.change24H.startsWith('+')";

  const handleAnalytics = () => console.log('Navigating to Analytics');
  const handleDeposit = () => console.log('Navigating to Deposit');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 1. DARK GREEN FOCUS AREA: Total Value & Pie Chart */}
      <View style={styles.darkSection}>
        <View style={styles.valueRow}>
          <View>
            <Text style={styles.valueLabel}> Portfolio Value</Text>
            <Text style={styles.primaryValue}>$33,3000</Text>

            <View style={styles.incomeRow}>
              <Text style={styles.incomeText}>Total Monthly Income: </Text>
              <Text style={styles.incomeValue}>2000</Text>
            </View>
          </View>
          <Ionicons name="stats-chart" color={colors.background} size={80} />
        </View>
      </View>

      {/* 2. LIGHT METRICS AREA: Secondary Metrics & Actions */}
      <View style={styles.lightSection}>
        {/* Performance & Growth Row */}
        <View style={styles.metricsRow}>
          <Text style={styles.performanceLabel}>
            All-time Growth:
            <Text style={{ color: ACCENT_GREEN, fontWeight: 'bold' }}> 20</Text>
          </Text>
          <Text
            style={{
              color: isPositive ? ACCENT_GREEN : 'red',
              fontWeight: 'bold',
            }}
          >
            24
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.analyticsButton}
            onPress={handleAnalytics}
          >
            <Text style={styles.analyticsText}>View Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.depositButton}
            onPress={() => navigation.navigate('Wallet', { screen: 'Deposit' })}
          >
            <Text style={styles.depositText}>Deposit Funds</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginTop: 0,
    borderRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 0,
  },
  // --- Dark Section (Focus) ---
  darkSection: {
    backgroundColor: colors.primary,
    padding: 20,
  },
  greeting: {
    color: colors.accent,
    fontSize: 14,
    marginBottom: 10,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pieChartPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueLabel: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '500',
  },
  primaryValue: {
    color: '#fff',
    fontSize: 33,
    fontWeight: '500',
    marginTop: 5,
  },
  incomeRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  incomeText: {
    color: colors.accent,
    fontSize: 14,
  },
  incomeValue: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  // --- Light Section (Metrics & Actions) ---
  lightSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: LIGHT_GREY,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GREY,
  },
  performanceLabel: {
    fontSize: 13,
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  analyticsButton: {
    flex: 1,
    backgroundColor: PRIMARY_GREEN,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginRight: 5,
  },
  analyticsText: {
    color: '#fff',
    fontWeight: '600',
  },
  depositButton: {
    flex: 1,
    backgroundColor: colors.accent,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginLeft: 5,
  },
  depositText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default PortfolioSummaryCard;
