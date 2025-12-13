import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native'
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
const DOCUMENTS = [
  { id: 'passport', label: 'Passport' },
  { id: 'iqama', label: 'Iqama (KSA)' },
  { id: 'emirates', label: 'Emirates ID (UAE)' },
  { id: 'cnic', label: 'CNIC (Pakistan)' },
]

const KycDocs = ({ navigation }) => {
  const [selected, setSelected] = useState(null)

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
        <Text style={styles.headerTitle}>Select Document</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.subtitle}>Choose the document you want to use for verification</Text>

      {/* Options */}
      {DOCUMENTS.map((doc) => (
        <TouchableOpacity
          key={doc.id}
          style={[styles.card, selected === doc.id && styles.cardActive]}
          onPress={() => setSelected(doc.id)}
        >
          <Text style={styles.cardText}>{doc.label}</Text>
          {selected === doc.id && <Text style={styles.check}>✓</Text>}
        </TouchableOpacity>
      ))}

      {/* CTA */}
      <TouchableOpacity
        style={[styles.primaryButton, !selected && styles.disabled]}
        disabled={!selected}
        onPress={() => navigation.navigate('KycUpload', { type: selected })}
      >
        <Text style={styles.primaryText}>Continue</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default KycDocs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 16,
    marginTop:30
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 14,
  },
  cardActive: {
    borderColor: '#D4AF37',
    backgroundColor: '#FAF7ED',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  check: {
    fontSize: 18,
    fontWeight: '700',
    color: '#D4AF37',
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