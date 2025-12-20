import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';

export default function WalletScreen() {
  const navigation = useNavigation();
  const ActionButton = ({
    title,
    onPress,
  }: {
    title: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );

  const BreakdownCard = ({ title, value }: any) => (
    <View style={styles.breakdownCard}>
      <Text style={styles.breakdownTitle}>{title}</Text>
      <Text style={styles.breakdownValue}>{value}</Text>
    </View>
  );

  const TransactionItem = ({ title, amount, date }: any) => (
    <View style={styles.txItem}>
      <View>
        <Text style={styles.txTitle}>{title}</Text>
        <Text style={styles.txDate}>{date}</Text>
      </View>
      <Text style={styles.txAmount}>{amount}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* WALLET SUMMARY */}
        <View style={styles.walletCard}>
          <Text style={styles.label}>Total Portfolio</Text>
          <Text style={styles.balance}>$24,680</Text>

          <View style={styles.walletRow}>
            <View>
              <Text style={styles.subLabel}>Available</Text>
              <Text style={styles.subValue}>$4,200</Text>
            </View>
            <View>
              <Text style={styles.subLabel}>Invested</Text>
              <Text style={styles.subValue}>$20,480</Text>
            </View>
          </View>
        </View>

        {/* QUICK ACTIONS */}
        <View style={styles.actionsRow}>
          <ActionButton
            title="Deposit"
            onPress={() => navigation.navigate('Deposit')}
          />
          <ActionButton
            title="Withdraw"
            onPress={() => navigation.navigate('Withdraw')}
          />
          <ActionButton
            title="Transfer"
            onPress={() => navigation.navigate('Transfer')}
          />
        </View>

        {/* PORTFOLIO BREAKDOWN */}
        <Text style={styles.sectionTitle}>Portfolio Breakdown</Text>

        <View style={styles.breakdownRow}>
          <BreakdownCard title="Real Estate" value="$15,300" />
          <BreakdownCard title="Stable Assets" value="$5,180" />
          <BreakdownCard title="Cash" value="$4,200" />
        </View>

        {/* TRANSACTIONS */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        <TransactionItem
          title="Investment – Al-Mizan Residency"
          amount="- $1,000"
          date="12 Dec 2025"
        />

        <TransactionItem
          title="Wallet Deposit"
          amount="+ $2,500"
          date="08 Dec 2025"
        />

        <TransactionItem
          title="Rental Yield Payout"
          amount="+ $320"
          date="02 Dec 2025"
        />

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Assets secured under Shariah-compliant structure
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
    flex: 1,
  },

  walletCard: {
    backgroundColor: colors.primary,
    margin: 0,
    borderRadius: 0,
    padding: 16,
  },
  label: {
    color: '#A7F3D0',
    fontSize: 12,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 33,
    fontWeight: '700',
    marginVertical: 3,
  },
  walletRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  subLabel: {
    color: '#A7F3D0',
    fontSize: 12,
  },
  subValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginTop: 15,
  },
  actionBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 3,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: 20,
  },
  actionText: {
    fontWeight: '600',
    color: '#0E5E4E',
  },

  sectionTitle: {
    marginHorizontal: 18,
    marginTop: 24,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '600',
  },

  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
  },
  breakdownCard: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    padding: 12,
    borderRadius: 12,
    elevation: 1,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  breakdownTitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  breakdownValue: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },

  txItem: {
    backgroundColor: '#ffffff',
    marginHorizontal: 18,
    marginBottom: 8,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
  },
  txTitle: {
    fontSize: 13,
    fontWeight: '500',
  },
  txDate: {
    fontSize: 11,
    color: '#6B7280',
  },
  txAmount: {
    fontSize: 14,
    fontWeight: '600',
  },

  footer: {
    margin: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'center',
  },
});
