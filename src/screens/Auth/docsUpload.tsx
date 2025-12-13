import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native'
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

const docsUpload = ({ navigation, route }) => {
  const { type } = route.params || {}

  const [frontUploaded, setFrontUploaded] = useState(false)
  const [backUploaded, setBackUploaded] = useState(false)

  const isBackRequired = type !== 'passport'
  const canContinue = frontUploaded && (!isBackRequired || backUploaded)

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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Upload Document</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.subtitle}>Make sure all details are clearly visible</Text>

      {/* Front Upload */}
      <TouchableOpacity
        style={[styles.uploadCard, frontUploaded && styles.uploaded]}
        onPress={() => setFrontUploaded(true)}
      >
        <Text style={styles.uploadTitle}>Front Side</Text>
        <Text style={styles.uploadHint}>
          {frontUploaded ? 'Uploaded successfully' : 'Tap to upload front image'}
        </Text>
      </TouchableOpacity>

      {/* Back Upload */}
      {isBackRequired && (
        <TouchableOpacity
          style={[styles.uploadCard, backUploaded && styles.uploaded]}
          onPress={() => setBackUploaded(true)}
        >
          <Text style={styles.uploadTitle}>Back Side</Text>
          <Text style={styles.uploadHint}>
            {backUploaded ? 'Uploaded successfully' : 'Tap to upload back image'}
          </Text>
        </TouchableOpacity>
      )}

      {/* Tips */}
      <View style={styles.tipsBox}>
        <Text style={styles.tip}>• No glare or blur</Text>
        <Text style={styles.tip}>• All edges visible</Text>
        <Text style={styles.tip}>• Original document only</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={[styles.primaryButton, !canContinue && styles.disabled]}
        disabled={!canContinue}
        onPress={() => navigation.navigate('KycSelfie')}
      >
        <Text style={styles.primaryText}>Continue</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default docsUpload

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  back: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 24,
  },
  uploadCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
  },
  uploaded: {
    borderColor: '#16A34A',
    backgroundColor: '#ECFDF5',
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  uploadHint: {
    fontSize: 14,
    color: '#6B7280',
  },
  tipsBox: {
    marginTop: 10,
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 14,
  },
  tip: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },
  primaryButton: {
    marginTop: 'auto',
    height: 54,
    borderRadius: 28,
    backgroundColor: '#D4AF37',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  primaryText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },
  disabled: {
    opacity: 0.5,
  },
})