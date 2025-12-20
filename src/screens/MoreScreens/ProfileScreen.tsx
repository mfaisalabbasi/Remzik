import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';

const ProfileKycScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('Muhammad Faisal');
  const [email, setEmail] = useState('faisal@example.com');
  const [phone, setPhone] = useState('+966 5XXXXXXXX');
  const [kycStatus, setKycStatus] = useState('Verified'); // could be Pending / Not Verified

  const handleEditProfile = () => {
    console.log('Edit Profile Pressed');
  };

  const handleUploadDocuments = () => {
    console.log('Upload Documents Pressed');
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
            source={require('../../assets/onboarding/slide2.png')} // placeholder avatar
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.phone}>{phone}</Text>
          </View>
          <TouchableOpacity
            style={styles.editButton}
            onPress={handleEditProfile}
          >
            <Ionicons name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* KYC Status */}
        <View style={styles.kycCard}>
          <Text style={styles.kycHeader}>KYC Status</Text>
          <View style={styles.kycStatus}>
            <Ionicons
              name={
                kycStatus === 'Verified' ? 'checkmark-circle' : 'alert-circle'
              }
              size={20}
              color={kycStatus === 'Verified' ? 'green' : 'orange'}
            />
            <Text style={styles.kycText}>{kycStatus}</Text>
          </View>
          {kycStatus !== 'Verified' && (
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleUploadDocuments}
            >
              <Text style={styles.uploadText}>Upload Documents</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* User Details Form (Read-only for now) */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} value={fullName} editable={false} />
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value={email} editable={false} />
          <Text style={styles.label}>Phone</Text>
          <TextInput style={styles.input} value={phone} editable={false} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileKycScreen;

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
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
  },
  kycCard: {
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  kycHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
  },
  kycStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kycText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  uploadButton: {
    marginTop: 15,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  uploadText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  formContainer: {
    marginHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    color: '#333',
  },
});
