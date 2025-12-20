import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
export default function MarketFilters() {
  return (
    <View style={styles.container}>
      {['Filter ⚙', 'ROI ↑↓', 'Location', 'Risk'].map(item => (
        <TouchableOpacity key={item} style={styles.button}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginRight: 8,
    elevation: 8,
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  text: {
    fontSize: 13,
    color: colors.primary,
  },
});
