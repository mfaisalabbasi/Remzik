import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native'
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

const KycSelfieScreen = ({ navigation }) => {
  const [selfieTaken, setSelfieTaken] = useState(false)

  return (
    <View style={{flex:1, backgroundColor:'#ffffff'}}>
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
        <Text style={styles.headerTitle}>Selfie Verification</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Camera Placeholder */}
      <View style={styles.cameraBox}>
        <View style={styles.faceCircle}>
          <Text style={styles.faceIcon}>🙂</Text>
        </View>
        <Text style={styles.cameraHint}>
          {selfieTaken
            ? 'Selfie captured successfully'
            : 'Position your face inside the circle'}
        </Text>
      </View>

      {/* Instructions */}
      <View style={styles.instructions}>
        <Text style={styles.instruction}>• Good lighting</Text>
        <Text style={styles.instruction}>• Remove glasses or cap</Text>
        <Text style={styles.instruction}>• Look straight at the camera</Text>
      </View>

      {/* Capture Button */}
      <TouchableOpacity
        style={[styles.captureButton, selfieTaken && styles.success]}
        onPress={() => setSelfieTaken(true)}
      >
        <Text style={styles.captureText}>
          {selfieTaken ? 'Retake Selfie' : 'Capture Selfie'}
        </Text>
      </TouchableOpacity>

      {/* CTA */}
      <TouchableOpacity
        style={[styles.primaryButton, !selfieTaken && styles.disabled]}
        disabled={!selfieTaken}
        onPress={() => navigation.navigate('KycReview')}
      >
        <Text style={styles.primaryText}>Submit for Verification</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default KycSelfieScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 16,
    marginTop:30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  back: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cameraBox: {
    height: 280,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  faceCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#9CA3AF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceIcon: {
    fontSize: 48,
  },
  cameraHint: {
    marginTop: 16,
    fontSize: 14,
    color: '#6B7280',
  },
  instructions: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 14,
    marginBottom: 24,
  },
  instruction: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },
  captureButton: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  success: {
    backgroundColor: '#DCFCE7',
  },
  captureText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  primaryButton: {
    marginTop: 'auto',
    height: 54,
    borderRadius: 28,
    backgroundColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
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