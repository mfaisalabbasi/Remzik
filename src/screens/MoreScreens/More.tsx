import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors'; // your colors file

const More = ({ navigation }: any) => {
  const menuItems = [
    { title: 'Profile & KYC', icon: 'person-outline', screen: 'Profile' },
    {
      title: 'Transaction History',
      icon: 'receipt-outline',
      screen: 'TransactionHistory',
    },
    {
      title: 'Payment Methods',
      icon: 'card-outline',
      screen: 'PaymentMethod',
    },
    { title: 'Support', icon: 'headset-outline', screen: 'Help' },
    { title: 'Settings', icon: 'settings-outline', screen: 'Setting' },
    { title: 'Logout', icon: 'log-out-outline', screen: 'Logout' },
  ];

  const handlePress = (item: any) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    } else {
      // handle logout
      console.log('Logout pressed');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backarrow}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} color={colors.primary} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={require('../../assets/onboarding/slide1.png')} // placeholder avatar
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Muhammad Faisal</Text>
            <Text style={styles.email}>faisal@example.com</Text>
            <View style={styles.kycStatus}>
              <Ionicons name="checkmark-circle" size={16} color="green" />
              <Text style={styles.kycText}>KYC Verified</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handlePress(item)}
            >
              <Ionicons
                name={item.icon as any}
                size={24}
                color={colors.primary}
              />
              <Text style={styles.menuText}>{item.title}</Text>
              <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backarrow: { marginLeft: 25, marginTop: 20 },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginVertical: 3,
  },
  kycStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  kycText: {
    marginLeft: 5,
    fontSize: 13,
    color: 'green',
    fontWeight: '500',
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});
