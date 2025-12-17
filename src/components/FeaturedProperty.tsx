// FeaturedPropertyCard.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You would need to install this library
import colors from '../theme/colors';

const PRIMARY_GREEN = '#0F5234';
const LIGHT_GREY = '#777';

const FeaturedPropertyCard = ({ property, onViewDetails }) => {
    const navigation = useNavigation()
  return (
    <View style={styles.card}>
      {/* Image & Shariah Badge */}
      <View>
        <Image 
         source={require('../assets/onboarding/featured.jpg')}
          style={styles.propertyImage}
        />
        {/* {property.isShariahCertified && ( */}
          <View style={styles.shariahBadge}>
            <Icon name="check-circle" size={12} color={PRIMARY_GREEN} />
            <Text style={styles.badgeText}>Shariah Certified</Text>
          </View>
        {/* )} */}
      </View>

      {/* Property Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.propertyName}>Jeddah Tower</Text>
        <Text style={styles.propertyLocation}>West Jeddah</Text>

        {/* Metrics Row */}
        <View style={styles.statsRow}>
          {/* Token Price */}
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>
              <Icon name="tag" size={14} color={LIGHT_GREY} /> Token Price
            </Text>
            <Text style={styles.statValue}>$30</Text>
          </View>

          {/* Expected Yield */}
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>
              <Icon name="level-up" size={14} color={LIGHT_GREY} /> Expected Yield
            </Text>
            <Text style={styles.statValueYield}>50%</Text>
          </View>
        </View>
        
        {/* View Details CTA */}
        <TouchableOpacity 
          style={styles.viewDetailsButton}
          onPress={() => navigation.navigate('Market',{screen:'MarketDetails'})}
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden', // Crucial for image border radius
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  propertyImage: {
    width: '100%',
    height: 200, 
    backgroundColor: '#eee',
  },
  shariahBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for clarity
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  badgeText: {
    color: PRIMARY_GREEN,
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  detailsContainer: {
    padding: 15,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  propertyLocation: {
    fontSize: 14,
    color: LIGHT_GREY,
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
    marginBottom: 15,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: LIGHT_GREY,
    marginBottom: 3,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  statValueYield: {
    fontSize: 18,
    fontWeight: '700',
    color: PRIMARY_GREEN, // Highlight yield in brand color
  },
  viewDetailsButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  viewDetailsText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default FeaturedPropertyCard;