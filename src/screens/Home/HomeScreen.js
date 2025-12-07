// src/screens/Home/HomeScreen.js

import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, SafeAreaView, StyleSheet, ScrollView,
  RefreshControl, TouchableOpacity, StatusBar,
  Platform
} from 'react-native';
import colors from '../../theme/colors';
import Header from  '../../components/Header';
import PropertyCard from  '../../components/PropertCard';
import { getFeaturedProperties, getMarketProperties } from '../../services/propertyService';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
  const [featured, setFeatured] = useState([]);
  const [market, setMarket] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const [feat, mkt] = await Promise.all([getFeaturedProperties(), getMarketProperties()]);
      setFeatured(feat);
      setMarket(mkt);
    } catch (err) {
      console.warn('Failed to load properties', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  }, [load]);

  const onPressProperty = (item) => {
    // navigate to Property detail; ensure route is registeredcl
    navigation.navigate('PropertyDetail', { propertyId: item.id });
  };

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

    <SafeAreaView style={styles.safe}>
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

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 120 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* HERO CARD */}
        <View style={styles.heroWrap}>
          <View style={styles.heroImagePlaceholder} />
          <View style={styles.heroCard}>
            <Text style={styles.heroTitle}>Emerald Gardens Villa, Dubai</Text>

            <View style={styles.badges}>
              <View style={styles.badge}><Ionicons name="checkmark-circle" size={12} color="#ffffff" /><Text style={styles.badgeText}> Valuation</Text></View>
              <View style={[styles.badge, { marginLeft: 8, backgroundColor: colors.primary }]}><Ionicons name="shield-checkmark" size={12} color="#fff" /><Text style={styles.badgeText}> Shariah Certified</Text></View>
            </View>

            <View style={styles.tokenBox}>
              <View style={styles.tokenRow}>
                <View>
                  <Text style={styles.small}>Price / token</Text>
                  <Text style={styles.tokenValue}>$56.00</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.small}>Min. purchase</Text>
                  <Text style={styles.tokenValue}>150 tokens</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.investBtn} onPress={() => navigation.navigate('Invest')}>
                <Text style={styles.investBtnText}>Invest Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quick nav / cards */}
        <View style={styles.quickRow}>
          <TouchableOpacity style={styles.quickCard} onPress={() => navigation.navigate('Portfolio')}>
            <Ionicons name="pie-chart" size={20} color={colors.primary} />
            <Text style={styles.quickTitle}>Portfolio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickCard} onPress={() => navigation.navigate('Market')}>
            <Ionicons name="search" size={20} color={colors.primary} />
            <Text style={styles.quickTitle}>Market</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickCard} onPress={() => navigation.navigate('Wallet')}>
            <Ionicons name="wallet" size={20} color={colors.primary} />
            <Text style={styles.quickTitle}>Wallet</Text>
          </TouchableOpacity>
        </View>

        {/* Featured properties */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Market')}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          {featured.map(item => (
            <PropertyCard key={item.id} item={item} onPress={onPressProperty} />
          ))}
        </View>

        {/* Market list / recent */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Market</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Market')}>
              <Text style={styles.seeAll}>Explore</Text>
            </TouchableOpacity>
          </View>

          {market.map(item => (
            <PropertyCard key={item.id} item={item} onPress={onPressProperty} />
          ))}
        </View>
      </ScrollView>

      {/* Bottom floating T&C row */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Terms')} style={styles.terms}>
          <Text style={styles.termsText}>Terms & Conditions</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.muted} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </View>
  
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { paddingHorizontal: 16 },
  heroWrap: { marginTop: 8, alignItems: 'center' },
  heroImagePlaceholder: {
    width: '100%',
    height: 160,
    backgroundColor: colors.lightGray,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  heroCard: {
    width: '94%',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginTop: -30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  heroTitle: { fontSize: 18, fontWeight: '700', color: colors.text },
  badges: { flexDirection: 'row', marginTop: 8 },
  badge: {
    backgroundColor: colors.accent,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeText: { color: '#fff', fontSize: 12, marginLeft: 6 },
  tokenBox: { marginTop: 12 },
  tokenRow: { flexDirection: 'row', justifyContent: 'space-between' },
  small: { color: colors.muted, fontSize: 12 },
  tokenValue: { fontSize: 15, fontWeight: '700', color: colors.text, marginTop: 4 },
  investBtn: {
    marginTop: 12,
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  investBtnText: { color: '#fff', fontWeight: '700' },

  quickRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  quickCard: {
    flex: 1,
    backgroundColor: colors.card,
    marginHorizontal: 4,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  quickTitle: { marginTop: 8, color: colors.text, fontWeight: '600' },

  section: { marginTop: 18 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.text },
  seeAll: { color: colors.muted },

  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 60, // above tab bar
    alignItems: 'center',
  },
  terms: {
    backgroundColor: colors.card,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  termsText: { color: colors.muted, marginRight: 8 },
});




