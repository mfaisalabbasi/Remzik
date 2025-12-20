import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  visible: boolean;
  amount: number;
  onClose: () => void;
};

export default function DepositSuccessModal({
  visible,
  amount,
  onClose,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Success Icon */}
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>✓</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>Deposit Successful</Text>

          {/* Amount */}
          <Text style={styles.amount}>${amount.toLocaleString()}</Text>

          {/* Info */}
          <Text style={styles.message}>
            Funds have been added to your wallet. Processing may take a few
            moments.
          </Text>

          {/* CTA */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Back to Wallet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#0E5E4E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },

  amount: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0E5E4E',
    marginBottom: 12,
  },

  message: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },

  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#0E5E4E',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
