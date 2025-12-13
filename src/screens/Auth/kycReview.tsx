import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native'
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

const KycReviewScreen = ({ navigation }) => {
  return (
<View style={{backgroundColor:'#ffffff', flex:1}}>
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
      {/* Status Icon */}
      <View style={styles.iconWrapper}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>⏳</Text>
        </View>
      </View>

      {/* Content */}
      <Text style={styles.title}>Verification in Progress</Text>
      <Text style={styles.subtitle}>
        Your documents are under review. This usually takes a few minutes but may take up to 24 hours.
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>• You will be notified once verification is complete</Text>
        <Text style={styles.infoText}>• No action is required from you right now</Text>
        <Text style={styles.infoText}>• Your data is securely encrypted</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.replace('Dashboard')}
      >
        <Text style={styles.primaryText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default KycReviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    marginTop:30    
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 36,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  infoBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
  },
  infoText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  primaryButton: {
    height: 54,
    borderRadius: 28,
    backgroundColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },
})