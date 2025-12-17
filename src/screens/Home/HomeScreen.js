// import React from 'react';
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
import { Screen } from 'react-native-screens';
import { useNavigation } from '@react-navigation/native';
import PortfolioCard from '../../components/PortfolioCard';
import FeaturedPropertyCard from '../../components/FeaturedProperty';


const HomeScreen = () => {
  const navigation = useNavigation()
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
     
      <ScrollView showsVerticalScrollIndicator={false}>

       <PortfolioCard/>

       

        {/* Featured Properties */}
        <FeaturedPropertyCard/>


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
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 14,
    color: '#6B7280',
  },

  username: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  notificationBtn: {
    backgroundColor: '#E6F2EE',
    padding: 10,
    borderRadius: 12,
  },

  notificationText: {
    fontSize: 18,
  },

  portfolioCard: {
    marginHorizontal: 20,
    backgroundColor:colors.primary,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  sectionLabel: {
    color: '#D1FAE5',
    fontSize: 13,
  },

  portfolioValue: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 6,
  },

  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 12,
  },

  monthlyIncome: {
    color: '#FDE68A',
    fontSize: 22,
    fontWeight: '600',
    padding:2
  },

  quickActions: {
    marginHorizontal: 20,
    marginBottom: 24,
  },

  primaryButton: {
    backgroundColor: colors.accent,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#0B3D2E',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#0B3D2E',
    fontSize: 16,
    fontWeight: '600',
  },

  sectionTitle: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3D2E',
    marginBottom: 12,
  },

  propertyCard: {
    marginHorizontal: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
  },

  propertyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B3D2E',
  },

  propertyMeta: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 10,
  },

  propertyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },

  propertyLabel: {
    fontSize: 13,
    color: '#6B7280',
  },

  propertyValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B3D2E',
  },

  cardButton: {
    marginTop: 14,
    backgroundColor: '#0B3D2E',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },

  cardButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  shariahBadge: {
    alignSelf: 'center',
    backgroundColor: '#E6F2EE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 30,
  },

  shariahText: {
    color: '#0B3D2E',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default HomeScreen;