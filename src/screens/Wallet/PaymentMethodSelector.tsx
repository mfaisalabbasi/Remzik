import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Method = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

const METHODS: Method[] = [
  {
    id: 'bank',
    title: 'Bank Transfer',
    subtitle: 'Local or international transfer',
    icon: '🏦',
  },
  {
    id: 'card',
    title: 'Debit / Credit Card',
    subtitle: 'Instant processing',
    icon: '💳',
  },
  {
    id: 'wallet',
    title: 'Wallet Balance',
    subtitle: 'Use existing funds',
    icon: '🪙',
  },
];

type Props = {
  selected: string;
  onSelect: (id: string) => void;
};

export default function PaymentMethodSelector({ selected, onSelect }: Props) {
  return (
    <View>
      <Text style={styles.title}>Select Payment Method</Text>

      {METHODS.map(method => {
        const isActive = selected === method.id;

        return (
          <TouchableOpacity
            key={method.id}
            style={[styles.card, isActive && styles.activeCard]}
            onPress={() => onSelect(method.id)}
          >
            <Text style={styles.icon}>{method.icon}</Text>

            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{method.title}</Text>
              <Text style={styles.subtitle}>{method.subtitle}</Text>
            </View>

            {isActive && <Text style={styles.check}>✓</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  activeCard: {
    borderColor: '#0E5E4E',
    backgroundColor: '#F0FDF9',
  },

  icon: {
    fontSize: 22,
    marginRight: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },

  check: {
    fontSize: 18,
    color: '#0E5E4E',
    fontWeight: '700',
  },
});
