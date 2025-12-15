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


const ProfileScreen = () => {
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
      <Text style={styles.header}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>Faisal Ahmed</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>faisal@email.com</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>KYC Status</Text>
        <Text style={styles.status}>Verified</Text>
      </View>
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
    marginBottom: 14,
  },

  label: {
    fontSize: 12,
    color: '#6B7280',
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0B3D2E',
  },

  status: {
    fontSize: 14,
    fontWeight: '700',
    color: '#16A34A',
  },

  item: {
    backgroundColor: '#F9FAFB',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },

  logout: {
    backgroundColor: '#FEE2E2',
  },

  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0B3D2E',
  },
});

export default ProfileScreen;