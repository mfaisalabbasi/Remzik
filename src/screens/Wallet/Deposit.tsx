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

const DepositScreen = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:"#ffffff"}}>

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
      <Text style={styles.title}>Deposit Funds</Text>

      <TouchableOpacity style={styles.methodBtn}>
        <Text style={styles.methodText}>Bank Transfer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.methodBtn}>
        <Text style={styles.methodText}>Debit / Credit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.methodBtn}>
        <Text style={styles.methodText}>Crypto</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', margin: 25 ,marginTop:30},

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 20,
    
  },

  methodBtn: {
    backgroundColor: '#F9FAFB',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 14,
  },

  methodText: { fontSize: 15, fontWeight: '600', color: '#0B3D2E' },
});

export default DepositScreen;