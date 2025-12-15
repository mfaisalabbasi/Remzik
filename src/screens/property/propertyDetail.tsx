import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';
import colors from '../../theme/colors';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PropertyDetailScreen = ({ navigation, route }) => {
  const [tokens, setTokens] = useState(1);

  const tokenPrice = 56;
  const monthlyYield = 8.4;

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
                   

    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Property Details</Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Property Info */}
        <View style={styles.card}>
          <Text style={styles.propertyName}>Emerald Gardens Villa</Text>
          <Text style={styles.location}>Riyadh, Saudi Arabia</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Token Price</Text>
            <Text style={styles.value}>${tokenPrice}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Expected Yield</Text>
            <Text style={styles.value}>{monthlyYield}% p.a</Text>
          </View>
        </View>

        {/* Token Selector */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Number of Tokens</Text>

          <View style={styles.counter}>
            <TouchableOpacity
              style={styles.counterBtn}
              onPress={() => tokens > 1 && setTokens(tokens - 1)}
            >
              <Text style={styles.counterText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.tokenCount}>{tokens}</Text>

            <TouchableOpacity
              style={styles.counterBtn}
              onPress={() => setTokens(tokens + 1)}
            >
              <Text style={styles.counterText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Investment</Text>
            <Text style={styles.summaryValue}>
              ${tokens * tokenPrice}
            </Text>
          </View>
        </View>

        {/* CTA */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('EnterAmount')}
        >
          <Text style={styles.primaryButtonText}>
            Continue to Invest
          </Text>
        </TouchableOpacity>

        {/* Shariah Badge */}
        <View style={styles.shariahBadge}>
          <Text style={styles.shariahText}>✔ Shariah Certified</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },

  back: {
    fontSize: 22,
    color: '#0B3D2E',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
  },

  propertyName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 4,
  },

  location: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
  },

  value: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B3D2E',
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 12,
  },

  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
  },

  counterBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#E6F2EE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  counterText: {
    fontSize: 20,
    color: '#0B3D2E',
    fontWeight: '700',
  },

  tokenCount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  summaryLabel: {
    fontSize: 13,
    color: '#6B7280',
  },

  summaryValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  primaryButton: {
    backgroundColor: colors.accent,
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 8,
  },

  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },

  shariahBadge: {
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 30,
    backgroundColor: '#E6F2EE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  shariahText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0B3D2E',
  },
});

export default PropertyDetailScreen;