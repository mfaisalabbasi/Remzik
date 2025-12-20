import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';

type InvestSuccessProps = {
  route: any;
  navigation: any;
};

const InvestSuccessScreen = ({ route, navigation }: InvestSuccessProps) => {
  // const { amount, payment } = route.params;
  // const expectedReturn = (amount * 0.08).toFixed(2); // Example 8% annual

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20, alignItems: 'center' }}
    >
      <Ionicons
        name="checkmark-circle"
        size={100}
        color="green"
        style={{ marginVertical: 30 }}
      />
      <Text style={styles.header}>Investment Successful!</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Amount Invested</Text>
        <Text style={styles.value}>SAR 54</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Payment Method</Text>
        <Text style={styles.value}>Bank</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Expected Returns (Annual)</Text>
        <Text style={styles.value}>SAR 50%</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('Portfolio')}
      >
        <Text style={styles.buttonText}>View Portfolio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#f2f2f2' }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={[styles.buttonText, { color: '#333' }]}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InvestSuccessScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  label: { fontSize: 14, color: '#666', marginBottom: 5 },
  value: { fontSize: 18, fontWeight: '700', color: '#333' },
  button: {
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  buttonText: { fontSize: 18, fontWeight: '700' },
});
