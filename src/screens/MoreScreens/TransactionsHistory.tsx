import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

type Transaction = {
  id: string;
  type: string; // Deposit / Withdraw / Payment
  amount: string;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
};

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'Deposit',
    amount: 'SAR 5,000',
    date: '19 Dec 2025',
    status: 'Completed',
  },
  {
    id: '2',
    type: 'Withdrawal',
    amount: 'SAR 1,500',
    date: '18 Dec 2025',
    status: 'Pending',
  },
  {
    id: '3',
    type: 'Deposit',
    amount: 'SAR 3,200',
    date: '17 Dec 2025',
    status: 'Completed',
  },
  {
    id: '4',
    type: 'Payment',
    amount: 'SAR 500',
    date: '16 Dec 2025',
    status: 'Failed',
  },
  {
    id: '5',
    type: 'Deposit',
    amount: 'SAR 2,000',
    date: '15 Dec 2025',
    status: 'Completed',
  },
];

const TransactionsHistory = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }: { item: Transaction }) => {
    let statusColor = '#666';
    if (item.status === 'Completed') statusColor = 'green';
    else if (item.status === 'Pending') statusColor = 'orange';
    else if (item.status === 'Failed') statusColor = 'red';

    return (
      <View style={styles.transactionItem}>
        <View style={styles.left}>
          <Ionicons
            name={
              item.type === 'Deposit'
                ? 'arrow-down-circle'
                : item.type === 'Withdrawal'
                ? 'arrow-up-circle'
                : 'card-outline'
            }
            size={24}
            color={colors.primary}
          />
          <View style={styles.transactionInfo}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={[styles.status, { color: statusColor }]}>
            {item.status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backarrow}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} color={colors.primary} />
      </TouchableOpacity>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default TransactionsHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backarrow: { marginLeft: 15, marginVertical: 20 },

  header: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
  },
  transactionItem: {
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
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionInfo: {
    marginLeft: 12,
  },
  type: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  right: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  status: {
    fontSize: 12,
    marginTop: 3,
    fontWeight: '600',
  },
});
