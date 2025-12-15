import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList
} from 'react-native';
import colors from '../../theme/colors';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WalletOverviewScreen = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
         <SafeAreaView
                      edges={['top']}
                      style={{ backgroundColor: colors.primary , paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0}}
                    >
                      <StatusBar
                        barStyle="light-content"
                        translucent={false}
                        backgroundColor="#0F5F3A"
                      />
                    </SafeAreaView>
                    <Header
                    title="Remzik"
                    onProfilePress={() => navigation.navigate('Profile')}
                    onNotifPress={() => navigation.navigate('Notifications')}
                    left={
                      <TouchableOpacity onPress={() => navigation.toggleDrawer?.()}>
                        <Ionicons name="menu-outline" size={26} color={colors.card} />
                      </TouchableOpacity>
                    }
                  />
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Wallet</Text>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceValue}>$4,250.00</Text>
      </View>

      {/* Actions */}
      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('Deposit')}
      >
        <Text style={styles.primaryText}>Deposit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => navigation.navigate('Withdraw')}
      >
        <Text style={styles.secondaryText}>Withdraw</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkBtn}
        onPress={() => navigation.navigate('TransactionHistory')}
      >
        <Text style={styles.linkText}>View Transaction History</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1,  padding: 60 , paddingHorizontal: 20,
    paddingTop: 16, margin:15, marginTop:20},

  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 20,
  },

  balanceCard: {
    backgroundColor: '#0B3D2E',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },

  balanceLabel: { color: '#D1FAE5', fontSize: 13 },
  balanceValue: { color: '#FFFFFF', fontSize: 28, fontWeight: '700' },

  primaryBtn: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryText: { fontSize: 16, fontWeight: '700', color: '#ffffff' },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#0B3D2E',
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
  },

  secondaryText: { fontSize: 16, fontWeight: '600', color: '#0B3D2E' },

  linkBtn: { marginTop: 20, alignItems: 'center' },
  linkText: { fontSize: 14, color: '#6B7280' },
});

export default WalletOverviewScreen;