import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native'
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

const KycScreen = ({ navigation }) => {
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
    <View style={styles.container}>
      <View style={{alignItems:'center', marginVertical:10}}>
         <Ionicons  name='shield-checkmark-outline' size={80} color={colors.primary}></Ionicons></View> 
      <Text style={styles.title}>KYC Verification</Text>
      <Text style={styles.subtitle}>
        To comply with Shariah & regulatory requirements, we need to verify your identity.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>What you’ll need</Text>

        <Text style={styles.item}>• Government issued ID (Passport / CNIC / Iqama)</Text>
        <Text style={styles.item}>• A clear selfie</Text>
        <Text style={styles.item}>• 2–3 minutes to complete</Text>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('KycDocument')}
      >
        <Text style={styles.primaryText}>Start KYC</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Do it later</Text>
      </TouchableOpacity>
    </View>
 </View> )
}

export default KycScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    justifyContent: 'center',
  },
  icon:{
     width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color:colors.primary
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 28,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 12,
  },
  item: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 8,
  },
  primaryButton: {
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    alignItems: 'center',
  },
  secondaryText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '500',
  },
})
