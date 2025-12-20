import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function MarketOverview() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.grid}>
        <StatItem value="Stable" label="Market " />
        <StatItem value="24/7" label=" Live" />
        <StatItem value="9.8%" label="Avg Yield" />
        <StatItem value="100%" label="Shariah" />
      </View>
    </View>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.item}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary, // light green
    padding: 0,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '23%',
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: colors.accent,
  },
});
