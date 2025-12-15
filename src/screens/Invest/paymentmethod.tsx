import React from 'react';
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

const PaymentMethodScreen = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:'#ffffff'}}>
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
      <Text style={styles.header}>Payment Method</Text>

      <TouchableOpacity style={styles.method}>
        <Text style={styles.methodText}>🏦 Bank Transfer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.method}>
        <Text style={styles.methodText}>💳 Debit / Credit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.method}>
        <Text style={styles.methodText}>₿ Crypto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('Success')}
      >
        <Text style={styles.primaryText}>Confirm Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin:20,
    marginTop:30
  },

  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 18,
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
  },

  value: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
    marginTop: 6,
  },

  row: {
    fontSize: 14,
    color: '#6B7280',
  },

  item: {
    fontSize: 14,
    marginBottom: 8,
    color: '#374151',
  },

  total: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    color: '#0B3D2E',
  },

  agreement: {
    marginVertical: 20,
  },

  agreeText: {
    fontSize: 12,
    color: '#6B7280',
  },

  method: {
    backgroundColor: '#F9FAFB',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },

  methodText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0B3D2E',
  },

  primaryBtn: {
    backgroundColor: '#D9B676',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 20,
  },

  primaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  success: {
    fontSize: 22,
    fontWeight: '700',
    color: '#16A34A',
    textAlign: 'center',
    marginBottom: 12,
  },

  desc: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default PaymentMethodScreen;