import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

type PaymentMethod = {
  id: string;
  type: 'Card' | 'Bank';
  details: string;
  isPrimary: boolean;
};

const paymentMethods: PaymentMethod[] = [
  { id: '1', type: 'Card', details: 'Visa **** 1234', isPrimary: true },
  { id: '2', type: 'Card', details: 'MasterCard **** 5678', isPrimary: false },
  {
    id: '3',
    type: 'Bank',
    details: 'Al Rajhi Bank **** 4321',
    isPrimary: false,
  },
];

const PaymentMethodsScreen = ({ navigation }: any) => {
  const handleAddPayment = () => {
    console.log('Add Payment Method');
  };

  const handleSetPrimary = (id: string) => {
    console.log('Set Primary Payment Method:', id);
  };

  const renderItem = ({ item }: { item: PaymentMethod }) => (
    <View style={styles.methodCard}>
      <View style={styles.left}>
        <Ionicons
          name={item.type === 'Card' ? 'card-outline' : 'wallet-outline'}
          size={24}
          color={colors.primary}
        />
        <Text style={styles.details}>{item.details}</Text>
      </View>
      <View style={styles.right}>
        {item.isPrimary && <Text style={styles.primaryText}>Primary</Text>}
        {!item.isPrimary && (
          <TouchableOpacity onPress={() => handleSetPrimary(item.id)}>
            <Text style={styles.setPrimary}>Set Primary</Text>
          </TouchableOpacity>
        )}
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backarrow}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} color={colors.primary} />
      </TouchableOpacity>
      <FlatList
        data={paymentMethods}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddPayment}>
        <Ionicons name="add-circle-outline" size={20} color="#fff" />
        <Text style={styles.addText}>Add Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backarrow: { marginLeft: 5, marginVertical: 10 },

  header: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
  },
  methodCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  details: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  right: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'green',
    marginRight: 10,
  },
  setPrimary: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginRight: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
  },
  addText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 8,
  },
});
