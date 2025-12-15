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

const WithdrawScreen = () => {
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
      <Text style={styles.title}>Withdraw Funds</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Available Balance</Text>
        <Text style={styles.value}>$4,250.00</Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryText}>Withdraw to Bank</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 , margin:20, marginTop:30},

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 18,
    marginBottom: 24,
  },

  label: { fontSize: 13, color: '#6B7280' },
  value: { fontSize: 22, fontWeight: '700', color: '#0B3D2E' },

  primaryBtn: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
  },

  primaryText: { fontSize: 16, fontWeight: '700', color: '#ffffff' },
});

export default WithdrawScreen;

