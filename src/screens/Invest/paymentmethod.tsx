import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

type PaymentMethod = {
  id: string;
  type: 'Card' | 'Bank';
  details: string;
};

type InvestPaymentProps = {
  route: any;
  navigation: any;
};

const PaymentMethodScreen = ({ route, navigation }: InvestPaymentProps) => {
  const amount = route.params?.amount || 0;

  // Payment methods (static for example)
  const paymentMethods: PaymentMethod[] = [
    { id: '1', type: 'Card', details: 'Visa **** 1234' },
    { id: '2', type: 'Card', details: 'MasterCard **** 5678' },
    { id: '3', type: 'Bank', details: 'Al Rajhi Bank **** 4321' },
  ];

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleNext = () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }
    navigation.navigate('InvestReview', { amount, paymentId: selectedMethod });
  };

  const renderItem = ({ item }: { item: PaymentMethod }) => {
    const isSelected = selectedMethod === item.id;
    return (
      <TouchableOpacity
        style={[styles.methodCard, isSelected && styles.selectedCard]}
        onPress={() => setSelectedMethod(item.id)}
      >
        <View style={styles.left}>
          <Ionicons
            name={item.type === 'Card' ? 'card-outline' : 'wallet-outline'}
            size={24}
            color={colors.primary}
          />
          <Text style={styles.details}>{item.details}</Text>
        </View>
        {isSelected && (
          <Ionicons name="checkmark-circle" size={24} color="green" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Payment Method</Text>
      <Text style={styles.subtitle}>Amount: SAR {amount.toFixed(2)}</Text>

      <FlatList
        data={paymentMethods}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 20 }}
      />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('ReviewSign')}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 5,
  },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  methodCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  selectedCard: { borderWidth: 2, borderColor: colors.primary },
  left: { flexDirection: 'row', alignItems: 'center' },
  details: { marginLeft: 12, fontSize: 16, color: '#333' },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  nextText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});
