import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

type InvestReviewProps = {
  route: any;
  navigation: any;
};

const InvestReviewScreen = ({ route, navigation }: InvestReviewProps) => {
  // const { amount, paymentId } = route.params;

  // Mocked payment details (could fetch real data)
  const paymentMethods: Record<string, string> = {
    '1': 'Visa **** 1234',
    '2': 'MasterCard **** 5678',
    '3': 'Al Rajhi Bank **** 4321',
  };

  // const selectedPayment = paymentMethods[paymentId] || 'N/A';
  // const expectedReturn = (amount * 0.08).toFixed(2); // Example 8% annual

  const handleConfirm = () => {
    // Navigate to Success screen or trigger API call
    // navigation.navigate('InvestSuccess', { amount, payment: selectedPayment });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
    >
      <TouchableOpacity
        style={styles.backarrow}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} color={colors.primary} />
      </TouchableOpacity>
      <Text style={styles.header}>Review & Confirm</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Investment Amount</Text>
        <Text style={styles.value}>SAR 34</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Payment Method</Text>
        <Text style={styles.value}>selectedPayment</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Expected Returns (Annual)</Text>
        <Text style={styles.value}>SAR 23</Text>
      </View>

      <View style={styles.signContainer}>
        <Ionicons
          name="finger-print-outline"
          size={64}
          color={colors.primary}
        />
        <Text style={styles.signText}>Sign to confirm investment</Text>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate('InvestmentSuccess')}
      >
        <Text style={styles.confirmText}>Confirm Investment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InvestReviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
  },
  backarrow: { marginLeft: 0, marginBottom: 10 },

  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  label: { fontSize: 14, color: '#666', marginBottom: 5 },
  value: { fontSize: 18, fontWeight: '700', color: '#333' },
  signContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  signText: { fontSize: 16, color: '#666', marginTop: 12 },
  confirmButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});
