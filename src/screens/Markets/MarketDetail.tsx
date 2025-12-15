import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import colors from '../../theme/colors';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MarketPropertyDetailScreen = ({ navigation, route }) => {
//   const { property } = route.params;
//   const [tokens, setTokens] = useState(1);

//   const ownership = (tokens * 0.02).toFixed(2);
//   const payout = (tokens * property.price * 0.007).toFixed(2);

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
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>property.name</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Token Price */}
        <View style={styles.card}>
          <Text style={styles.label}>Token Price</Text>
          <Text style={styles.price}>$property.price</Text>
        </View>

        {/* Token Selector */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Select Tokens</Text>

          <View style={styles.counter}>
            <TouchableOpacity
              style={styles.counterBtn}
              onPress={() => tokens > 1 && setTokens(tokens - 1)}
            >
              <Text style={styles.counterText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.token}>tokens</Text>

            <TouchableOpacity
              style={styles.counterBtn}
              onPress={() => setTokens(tokens + 1)}
            >
              <Text style={styles.counterText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.meta}>Ownership</Text>
            <Text style={styles.metaValue}>ownership%</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.meta}>Est. Monthly Payout</Text>
            <Text style={styles.metaValue}>$payout</Text>
          </View>
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentRow}>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payText}>Bank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payText}>Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payText}>Crypto</Text>
          </TouchableOpacity>
        </View>

        {/* CTA */}
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Continue</Text>
        </TouchableOpacity>

        {/* Shariah */}
        <View style={styles.shariah}>
          <Text style={styles.shariahText}>✔ Shariah Certified</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },

  back: { fontSize: 22, color: '#0B3D2E' },
  title: { fontSize: 16, fontWeight: '700', color: '#0B3D2E' },

  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
  },

  label: { fontSize: 13, color: '#6B7280' },
  price: { fontSize: 26, fontWeight: '700', color: '#0B3D2E' },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
    color: '#0B3D2E',
  },

  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  counterBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#E6F2EE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  counterText: { fontSize: 20, fontWeight: '700', color: '#0B3D2E' },
  token: { fontSize: 20, fontWeight: '700', color: '#0B3D2E' },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  meta: { fontSize: 13, color: '#6B7280' },
  metaValue: { fontSize: 13, fontWeight: '700', color: '#0B3D2E' },

  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 16,
  },

  payBtn: {
    borderWidth: 1,
    borderColor: '#0B3D2E',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  payText: { fontSize: 14, fontWeight: '600', color: '#0B3D2E' },

  primaryBtn: {
    backgroundColor: colors.accent,
    marginHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 18,
    alignItems: 'center',
  },

  primaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },

  shariah: {
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 30,
    backgroundColor: '#E6F2EE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  shariahText: { fontSize: 12, fontWeight: '600', color: '#0B3D2E' },
});

export default MarketPropertyDetailScreen;